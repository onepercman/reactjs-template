import { Layout } from "@/components/app/layout"
import { type AppProps } from "next/app"
import "../styles/styles.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
