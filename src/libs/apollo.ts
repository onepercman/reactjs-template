import { API_URL } from "@/config/endpoints.config"
import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apollo = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})
