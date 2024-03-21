import { _DEV_ } from "@/config/mode.config"
import { storageKeys } from "@/config/storage.config"
import { createStore } from "@/libs/valtio"
import { ClientModel } from "@/models/client.model"
import { devtools } from "valtio/utils"

const clientStore = createStore(new ClientModel(), { key: storageKeys.client, include: ["chain"] })

devtools(clientStore, { name: "Client", enabled: _DEV_ })

export { clientStore }
