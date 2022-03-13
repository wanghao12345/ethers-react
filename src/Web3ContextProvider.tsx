import React, {
    createContext,
    PropsWithChildren,
    ReactNode,
    useContext,
    useState,
} from "react"
import {
    useMetaMask
} from './useMetaMask';
import { useWeb3 } from './useWeb3';
export type Props = {
    children: ReactNode,
}

export type ContextValue = {
    connectedAccount: string;
    balance: string | number;
}

export const Web3ProviderContext = createContext<ContextValue>({} as ContextValue)

export const Web3ContextProvider = ({ children }: Props) => {
    const { connectedAccount } = useMetaMask();
    const { balance } = useWeb3();
    return (
        <Web3ProviderContext.Provider
            value={{ 
                connectedAccount,
                balance
            }}
        >
            {children}
        </Web3ProviderContext.Provider>
    )
}