import { storageKeys } from "@/config/storage.config"
import { createStore } from "@/libs/valtio"
import { UserModel } from "@/models/user.model"

const userStore = createStore(new UserModel(), { key: storageKeys.user })

export default userStore
