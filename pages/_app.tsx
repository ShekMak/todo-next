import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-black font-serif h-screen w-screen overflow-hidden">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
