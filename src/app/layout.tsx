import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import { ModeToggle } from '@/common/theme/mode-toggler';
import StarsCanvas from '@/common/components/sections/hero/_components/StarBackground';

export const metadata: Metadata = {
  title: 'Prashant Ambaliya',
  description:
    'Check out my portfolio as an experienced web developer, Prashant Ambaliya! Built using TypeScript, Next.js 14, Framer Motion, and Tailwind CSS.',
  
  openGraph: {
    title: 'Prashant Ambaliya - Web Developer Portfolio',
    description: 'Check out my portfolio as an experienced web developer, Prashant Ambaliya! Built using TypeScript, Next.js 14, Framer Motion, and Tailwind CSS.',
    url: 'https://www.prashantambaliya.com',
    siteName: 'Prashant Ambaliya Portfolio',
    images: [
      {
        url: '/Prashant-Ambaliya-Portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Prashant Ambaliya Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Ambaliya - Web Developer Portfolio',
    description: 'Check out my portfolio as an experienced web developer, Prashant Ambaliya! Built using TypeScript, Next.js 14, Framer Motion, and Tailwind CSS.',
    images: ['/Prashant-Ambaliya-Portfolio.png'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Prashant Ambaliya' }],
  creator: 'Prashant Ambaliya',
  keywords: ['web developer', 'portfolio', 'Next.js', 'TypeScript', 'React', 'Prashant Ambaliya'],
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center bg-[#070514] overflow-y-scroll overflow-x-hidden',
          fontMontserrat.className,
         )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              <StarsCanvas />
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}