import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthContextProvider } from '../store/auth.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <div className="bg-white text-black font-serif h-screen w-screen overflow-hidden">
      <Component {...pageProps} />
    </div>
    </AuthContextProvider>
  )
}

export default MyApp
