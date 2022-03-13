import React, { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { useMetaMask } from './useMetaMask';

export const useWeb3 = () => {
    const { connectedAccount } = useMetaMask();
    const [balance, setBalance] = useState<string | number>(0);
    const [provider, setProvider] = useState<any>(null);

    // get provider
    const getProvider = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
    }

    // get balance
    const getBalance = async () => {
        const balance = await provider.getBalance(connectedAccount);
        setBalance(ethers.utils.formatEther(balance));
    }

    useEffect(() => {
        getProvider()
    }, []);

    useEffect(() => {
        connectedAccount && provider && getBalance()
    }, [connectedAccount, provider]);

    return {
        balance,
        web3Provider: provider
    }
}