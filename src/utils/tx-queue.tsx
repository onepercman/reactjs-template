import { clientStore } from "@/stores/client.store"
import { toast } from "react-hot-toast"
import { Hex } from "viem"
import { getTxUrl } from "./web3"

interface WaitTxArgs {
  hash: Hex
  msg?: string
  successMsg?: string
  onSuccess?(): void
}

export async function waitTx({ hash, msg, successMsg, onSuccess }: WaitTxArgs) {
  const { publicClient, chain } = clientStore

  return toast.promise(
    new Promise(function (resolve, reject) {
      return publicClient
        .waitForTransactionReceipt({ hash })
        .then(function ({ status }) {
          if (status === "success") {
            onSuccess && onSuccess()
            resolve(true)
          } else reject("Execution reverted")
        })
        .catch(function (err) {
          reject((err as Error).message)
        })
    }),
    {
      loading: (
        <div className="flex flex-col gap-0.5">
          <span>Pending</span>
          {msg && <span className="text-xs">{msg}</span>}
          <a
            href={getTxUrl(hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs"
            onClick={function (e) {
              e.stopPropagation()
            }}
          >
            Open {chain.blockExplorers?.default.name || "tx info"}
          </a>
        </div>
      ),
      error: function (err) {
        return (
          <div className="flex flex-col gap-0.5">
            <span>Error</span>
            <span className="text-error text-xs">{(err as Error).message}</span>
            <a
              href={getTxUrl(hash)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-xs"
              onClick={function (e) {
                e.stopPropagation()
              }}
            >
              Open {chain.blockExplorers?.default.name || "tx info"}
            </a>
          </div>
        )
      },
      success: (
        <div className="flex flex-col gap-0.5">
          <span>Success</span>
          {successMsg && <span className="text-success text-xs">{successMsg}</span>}
          <a
            href={getTxUrl(hash)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs"
            onClick={function (e) {
              e.stopPropagation()
            }}
          >
            Open {chain.blockExplorers?.default.name || "tx info"}
          </a>
        </div>
      ),
    },
    {
      position: "bottom-right",
      duration: 5000,
    },
  )
}
