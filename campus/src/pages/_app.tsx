import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
const karbon = localFont({
  src: [
    {
      path: './karbon.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-karbon'
})

const swift = localFont({
  src: [
    {
      path: './swift.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-swift'
})
export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${karbon.variable} ${swift.variable}`}><Component {...pageProps} /></main>
}
