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
import Script from 'next/script';

export const metadata: Metadata = {
  // Improved title - more descriptive and within recommended length
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
        url: 'https://www.prashantambaliya.com/Prashant-Ambaliya-Portfolio.png',
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
    images: ['https://www.prashantambaliya.com/Prashant-Ambaliya-Portfolio.png'],
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
  
  // Add Google Site Verification
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

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prashant Ambaliya",
  "jobTitle": "Full Stack Developer",
  "description": "Experienced Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, PostgreSQL, and AWS",
  "url": "https://www.prashantambaliya.com",
  "image": "https://www.prashantambaliya.com/Prashant-Ambaliya-Portfolio.png",
  "sameAs": [
    "https://github.com/prashantambaliya",
    "https://linkedin.com/in/prashantambaliya"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Full Stack Development",
    "Web Development"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Developer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
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
              <main role="main">
                {children}
              </main>
              <Footer />
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>

        {/* Google Analytics - Replace with your actual GA4 tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
