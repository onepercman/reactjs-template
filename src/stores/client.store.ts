import { storageKeys } from "@/config/storage.config"
import { createStore } from "@/libs/valtio"
import { ClientModel } from "@/models/client.model"
import { devtools } from "valtio/utils"

const clientStore = createStore(new ClientModel(), { key: storageKeys.client, include: ["chain"] })

devtools(clientStore, { name: "Client", enabled: __DEV__ })

export { clientStore }
