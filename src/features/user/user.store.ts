import { createStore } from "@/libs/valtio"
import { storageKeys } from "@/shared/config/storage.config"
import { UserModel } from "./user.model"

const userStore = createStore(new UserModel(), { key: storageKeys.user })

export default userStore
