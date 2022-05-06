# ethers-react
ethers-react is to facilitate the use of ethers in react JS, which is a library for interacting with Ethereum blockchain. It is very convenient for developers to develop Web3 related products

# Quickstart

First,Ensure you're using the latest `react` and `react-dom` versions (or anything `^18`).

If ok, next......

## 1. Install

```
yarn add ethers-react
```

## 2. App.ts use ethers-react

```react
import { Web3ContextProvider } from 'ethers-react'

function App() {
    return (
        <Web3ContextProvider>
            ...
        </Web3ContextProvider>
    )


}
export default App
```

Then you can get your metamask account balance and account number

```react
import { useContext } from 'react';
import { Web3ProviderContext } from "ethers-react";

function Component() {
  	const { connectedAccount, balance } = useContext(Web3ProviderContext);
    return (
        <div>
           	<p>your connected metaMask account: {connectedAccount}</p>
        		<p>your account banlance: {balance}</p>
        </div>
    )


}
export default Component


```

## 3.  You can use useMetaMask hooks

```react
import { useMetaMask } from "ethers-react";

const { 
  	isInstalledWallet, // Determine whether the wallet is installed
    isConnected, // Determine whether the wallet is connected
    connectedAccount, // Metamask current connected account
    connectWallect // Connect metamask function
} = useMetaMask();

```

## 4. You can use useWeb3 hooks

```react
import { useWeb3 } from "ethers-react";

const { 
		balance, // Get your balance
    web3Provider // Get web3Provider
} = useWeb3();
```

More wonderful, please look forward to......





