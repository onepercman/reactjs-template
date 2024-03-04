import { storageKeys } from "@/config/storage.config"
import { createStore } from "@/libs/valtio"
import { UserFactory } from "@/models/user.factory"

const userStore = createStore(new UserFactory(), { key: storageKeys.user })

export default userStore
