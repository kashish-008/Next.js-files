import { Bebas_Neue, Crimson_Pro, DM_Mono } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
const crimson = Crimson_Pro({ weight: ['300','400','600'], subsets: ['latin'], variable: '--font-body', style: ['normal','italic'], display: 'swap' })
const dmMono = DM_Mono({ weight: ['300','400'], subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata = {
  title: 'Kashish Thakur — Frontend Developer',
  description: 'Kashish Thakur. MCA student. Aspiring frontend developer. Builder of things that move.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${crimson.variable} ${dmMono.variable}`}>
      <body className="font-body font-light antialiased">
        <div className="grain"></div>
        {children}
      </body>
    </html>
  )
}