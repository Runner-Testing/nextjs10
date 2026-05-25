import './globals.css';

export const metadata = {
  title: 'FlazHost Next.js App',
  description: 'Next.js application deployed on FlazHost PaaS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
