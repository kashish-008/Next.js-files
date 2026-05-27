import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';

export const metadata = {
  title: 'ArticleHub - Read Amazing Articles',
  description: 'Your go-to platform for quality tech articles',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex grow container mx-auto px-4 py-8 justify-center">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}