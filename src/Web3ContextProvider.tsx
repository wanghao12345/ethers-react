import React, {
    createContext,
    PropsWithChildren,
    ReactNode,
    useContext,
    useState,
  } from "react"
  export type Props = {
    children: ReactNode
  }

  export type ContextValue = {
    switchNetwork: (chainId: string) => Promise<void>
    wcConnect: () => void
    connectToMetamask: () => Promise<any>
  }

  export const ProviderContext = createContext({})
  export const Web3ContextProvider = ({ children }: Props) => {

  
    return (
      <ProviderContext.Provider
        value={{ test: '123' }}
      >
        {children}
      </ProviderContext.Provider>
    )
  }