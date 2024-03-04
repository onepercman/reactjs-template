import { isDev } from "@/config/mode.config"
import { storageKeys } from "@/config/storage.config"
import { createStore } from "@/libs/valtio"
import { ClientFactory } from "@/models/client.factory"
import { devtools } from "valtio/utils"

const clientStore = createStore(new ClientFactory(), { key: storageKeys.client, include: ["chain"] })

devtools(clientStore, { name: "Client", enabled: isDev })

export { clientStore }
