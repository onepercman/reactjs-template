import { Logger } from "@/libs/logger";
import { toast } from "react-hot-toast";
import { BaseError } from "viem";

export function toastErrors(err: BaseError, defaultMsg: string) {
	Logger.error("Contract Call", err);
	toast.error(err.shortMessage || defaultMsg);
}
