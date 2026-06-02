import './globals.css';

export const metadata = {
  title: 'Pinterest Clone',
  description: 'A photo gallery with favorites, drag & drop, and infinite scroll',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}