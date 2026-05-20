import Link from 'next/link'  // ← Add this import
import './globals.css'

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html>
      <body>
        <header>
          My Website |
          <Link href="/">Home</Link> |     
          <Link href="/about">About</Link>  
        </header>

        <main style={{ padding: '20px' }}>
          {children}
        </main>

        <footer>&copy; 2024 My Website</footer>
      </body>
    </html>
  )
}