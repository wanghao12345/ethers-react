import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Web3Provider } from 'web3-ts-hooks'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <Web3Provider>
            
        // </Web3Provider>
        
        <Component {...pageProps} />
    )


}

export default MyApp
