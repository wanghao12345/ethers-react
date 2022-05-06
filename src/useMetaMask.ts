import React, { useState, useEffect, useCallback } from 'react';

export const useMetaMask = () => {
    // is installed wallet
    const [isInstalledWallet, setIsInstalledWallet] = useState<boolean>(false);
    // is connected wallet
    const [isConnected, setIsConnected] = useState<boolean>(false);
    // connected accounts
    const [connectedAccount, setConnectedAccount] = useState<string | null>(null);

    // check wallet is installed
    const checkIfWalletIsInstalled = async () => {
        let flag: boolean = true;
        if (!window.ethereum) {
            flag = false
        }
        setIsInstalledWallet(flag);
        return flag;
    }

    // monitor accounts change
    const onChangeAccounts = async () => {
        try {
            if (!isInstalledWallet) {
                return false;
            }
            window.ethereum.on('accountsChanged', function (accounts: string []) {
                if (accounts && accounts.length) {
                    setConnectedAccount(accounts[0])
                } else {
                    setConnectedAccount(null)
                }
            });
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    // monitor chain change
    const onChangeChain = async () => {
        try {
            if (!isInstalledWallet) {
                return false;
            }
            window.ethereum.on('chainChanged', function (_chainId: string) {
                console.log('chainChanged:', parseInt(_chainId));
                window.location.reload();
            });
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    // check wallet is connected
    const checkIfWalletIsConnected = async () => {
        try {
            if (!isInstalledWallet) {
                return false;
            }
            const accounts = await window.ethereum.request({
                method: 'eth_accounts'
            });
            if (accounts && accounts.length) {
                setConnectedAccount(accounts[0]);
            } else {
                setConnectedAccount(null)
                console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    // connect wallect
    const connectWallect = async () => {
        try {
            if (!isInstalledWallet) {
                return false;
            }
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            if (accounts && accounts.length) {
                setConnectedAccount(accounts[0]);
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }

    }

    useEffect(() => {
        checkIfWalletIsInstalled();
    }, []);

    useEffect(() => {
        checkIfWalletIsConnected();
        onChangeAccounts();
        onChangeChain();
    }, [isInstalledWallet]);


    return {
        isInstalledWallet,
        isConnected,
        connectedAccount,
        checkIfWalletIsInstalled,
        checkIfWalletIsConnected,
        connectWallect
    }
}
