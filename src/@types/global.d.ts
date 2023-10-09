declare global {
  interface Window {
    ethereum?: {
      isMetamask?: boolean
    }
  }
}
