import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'ShopEase - Your Shopping Destination',
  description: 'Modern e-commerce store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AppProvider>
          <Navbar />
          <main className="flex grow justify-center container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </AppProvider>
      </body>
    </html>
  );
}