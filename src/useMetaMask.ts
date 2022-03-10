import { useState } from 'react';

export const useMetaMask = () => {
    const [num, setNum] = useState(0);
    return {
        num,
        setNum
    }
}