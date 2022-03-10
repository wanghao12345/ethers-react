import React, { useState, useEffect, useCallback } from 'react';

export const useMetaMask = (val: number) => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        if (val) {
            setNum(1)
        }
    });

    return num
}
