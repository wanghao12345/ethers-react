import React, { useState, useEffect, useCallback } from 'react';

export const useMetaMask = () => {
    // is installed wallet
    const [isInstalledWallet, setIsInstalledWallet] = useState<boolean>(false);
    // is connected wallet
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        if (window.ethereum) {
            setIsInstalledWallet(true)
        }
    })


    return {
        isInstalledWallet,
        isConnected
    }
}
