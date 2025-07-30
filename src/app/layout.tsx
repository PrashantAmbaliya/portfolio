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
    'Experienced Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, and AWS. Building responsive, scalable web applications with modern technologies.',
  
  // Add favicon and icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  // Add manifest for PWA
  manifest: '/site.webmanifest',
  
  openGraph: {
    title: 'Prashant Ambaliya - Full Stack Developer | React, Next.js, Node.js',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, and AWS. Building responsive, scalable web applications.',
    url: 'https://www.prashantambaliya.com',
    siteName: 'Prashant Ambaliya Portfolio',
    images: [
      {
        url: '/Prashant-Ambaliya-Portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Prashant Ambaliya - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Ambaliya - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, and AWS.',
    images: ['/Prashant-Ambaliya-Portfolio.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  authors: [{ name: 'Prashant Ambaliya', url: 'https://www.prashantambaliya.com' }],
  creator: 'Prashant Ambaliya',
  publisher: 'Prashant Ambaliya',
  
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'MongoDB Developer',
    'PostgreSQL Developer',
    'AWS Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Prashant Ambaliya',
    'Portfolio',
    'Web Development',
    'Responsive Design',
    'Scalable Applications'
  ],
  
  // Add structured data
  other: {
    'google-site-verification': 'BqbPC8xZh4cZ31EY0UFGMiJdwXM2KtUuHBbOERVMaO0', 
  },
  
  alternates: {
    canonical: 'https://www.prashantambaliya.com',
  },
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
  display: 'swap',
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
