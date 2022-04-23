import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HomePage from '../components/home/home';

function MyApp({ Component, pageProps }: AppProps) {
  return <HomePage>
    <Component {...pageProps} />
  </HomePage>
}

export default MyApp
