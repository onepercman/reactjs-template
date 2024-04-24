import { API_URL } from "@/config/endpoints.config";
import userStore from "@/stores/user.store";
import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

const requestHandler = {
	onFulfilled(config: InternalAxiosRequestConfig) {
		const { jwt } = userStore;
		if (jwt && config.headers.Authorization) {
			config.headers.Authorization = `Bearer ${jwt}`;
		}
		return config;
	},
};

const responseHandler = {
	onFulfilled(response: AxiosResponse) {
		response.statusText = "";
		response.data = response.data.data;
		return Promise.resolve(response);
	},
	onRejected(error: AxiosError) {
		if (error.response?.data) {
			const data = error.response.data as any;
			error.response.statusText = data["errorMsg"] || data["errorCode"];
			error.response.data = null;
		} else {
			error.response!.statusText = "Connection lost";
		}
		return Promise.resolve(error.response);
	},
};

export const api: AxiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {},
});

api.interceptors.request.use(requestHandler.onFulfilled);
api.interceptors.response.use(
	responseHandler.onFulfilled,
	responseHandler.onRejected,
);
