import { useActive } from "@/hooks/wallet/use-active"
import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { Drawer } from "@/libs/ui/drawer"
import { truncateAddress } from "@/utils/string"
import { FC, Fragment, HTMLAttributes } from "react"
import { HiMenu } from "react-icons/hi"
import { Link } from "react-router-dom"
import { ChainSelector } from "../wallet/chain-selector"
import { ToggleTheme } from "./toggle-theme"

export const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const { openConnectDialog, disconnect, isConnecting, account } = useActive()

  return (
    <Fragment>
      <header className="bg-body sticky left-0 right-0 top-0 z-50 h-16 shadow">
        <Container className="flex h-full items-center justify-between">
          <Link to="/" className="h-8">
            <img src="/logo/logo.png" alt="" className="h-full" />
          </Link>
          <Button.Group>
            <div className="hidden sm:inline-flex">
              <ToggleTheme />
              <ChainSelector />
              {account ? <Button variant="outlined">{truncateAddress(account)}</Button> : null}
              <Button variant="outlined" onClick={account ? disconnect : openConnectDialog} loading={isConnecting}>
                {account ? "Disconnect" : "Connect Wallet"}
              </Button>
            </div>

            <Drawer
              title="Virgin"
              trigger={<Button leftIcon={<HiMenu />} variant="outlined" className="aspect-square p-0" />}
              className="flex flex-col gap-6 px-0"
            >
              {({ close }) => (
                <Fragment>
                  <a onClick={close} className="cursor-pointer px-6 py-2 transition-colors hover:bg-black/20">
                    Menu 1
                  </a>
                  <a onClick={close} className="cursor-pointer px-6 py-2 transition-colors hover:bg-black/20">
                    Menu 2
                  </a>
                  <a onClick={close} className="cursor-pointer px-6 py-2 transition-colors hover:bg-black/20">
                    Menu 3
                  </a>
                  <a onClick={close} className="cursor-pointer px-6 py-2 transition-colors hover:bg-black/20">
                    Menu 4
                  </a>
                  <a onClick={close} className="cursor-pointer px-6 py-2 transition-colors hover:bg-black/20">
                    Menu 5
                  </a>
                </Fragment>
              )}
            </Drawer>
          </Button.Group>
        </Container>
      </header>
      {children}
    </Fragment>
  )
}
