import { storageKeys } from "@/config/storage.config"
import { createStore } from "use-valtio-store"
import { UserModel } from "./user.model"

const userStore = createStore(new UserModel(), { key: storageKeys.user })

export default userStore
