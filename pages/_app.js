import Head from 'next/head'
import { AuthUserProvider } from '../src/Context/AuthUserContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp
