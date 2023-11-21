import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

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

const karbonRegular = localFont({
  src: [
    {
      path: './karbon-regular.otf',
      weight: '400',
      style: 'medium',
    },
  ],
  variable: '--font-karbonRegular'
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
  return (
    <main className={`${karbon.variable} ${karbonRegular.variable} ${swift.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
