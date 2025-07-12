import type { Metadata } from 'next';
import { Rubik, Karla } from 'next/font/google';
import './globals.css';
import Header from '@/components/org/jallen/header/Header';
import PageTransition from '@/components/org/jallen/transition/PageTransition';
import StairTransition from '@/components/org/jallen/transition/StairTransition';
import Footer from '@/components/org/jallen/footer/Footer';
import Loader from './loading';

const karla = Karla({
  variable: '--font-karla',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jallen - Portfolio',
  description: 'The Official Portfolio of James Allen created by using Next.js',
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${karla.variable} ${rubik.variable} antialiased`}>
        <Loader />
        <StairTransition />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
