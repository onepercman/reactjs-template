import { MODE, Mode } from "./mode.config";

const API_URLS = <const>{
	[Mode.Local]: "",
	[Mode.Dev]: "",
	[Mode.Stg]: "",
	[Mode.Prd]: "",
};

export const API_URL = API_URLS[MODE];
