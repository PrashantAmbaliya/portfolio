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

const SITE = 'https://www.prashantambaliya.com';
const DESCRIPTION =
  'Prashant Ambaliya is a Senior Software Engineer with 5+ years building full-stack web and mobile apps, cloud infrastructure on AWS, data pipelines and AI integrations (React, Next.js, Node.js, Python, FastAPI, PostgreSQL, AWS). Available for contract and freelance work.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Prashant Ambaliya | Senior Software Engineer (React, Next.js, Node.js, AWS, AI)',
    template: '%s | Prashant Ambaliya',
  },
  description: DESCRIPTION,
  applicationName: 'Prashant Ambaliya Portfolio',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  
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
    title: 'Prashant Ambaliya | Senior Software Engineer',
    description: DESCRIPTION,
    url: SITE,
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
    title: 'Prashant Ambaliya | Senior Software Engineer',
    description: DESCRIPTION,
    images: ['/Prashant-Ambaliya-Portfolio.png'],
    creator: '@prashantambaliya',
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
    'Prashant Ambaliya',
    'Senior Software Engineer',
    'Full Stack Developer',
    'Freelance Software Engineer',
    'Contract Developer',
    'Python Developer',
    'FastAPI Developer',
    'AI Integration Developer',
    'LLM Application Developer',
    'Mobile App Developer',
    'React Native Developer',
    'Cloud Engineer AWS',
    'Website Developer New Hampshire',
    'Small Business Website Developer',
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
    canonical: SITE,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}/#person`,
  name: 'Prashant Ambaliya',
  url: SITE,
  image: `${SITE}/images/photo.jpg`,
  jobTitle: 'Senior Software Engineer',
  description: DESCRIPTION,
  worksFor: { '@type': 'Organization', name: 'EVERSANA' },
  alumniOf: [
    { '@type': 'Organization', name: 'Wings Tech Solutions' },
    { '@type': 'Organization', name: 'Purezza Technologies' },
  ],
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Terraform',
    'Docker', 'Kubernetes', 'React Native', 'LLM integration', 'RAG', 'Data pipelines', 'Snowflake',
  ],
  sameAs: [
    'https://www.linkedin.com/in/prashant-ambaliya/',
    'https://github.com/PrashantAmbaliya',
  ],
  email: 'mailto:prashantambaliya226@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Rajkot', addressRegion: 'Gujarat', addressCountry: 'IN' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'Prashant Ambaliya',
  description: DESCRIPTION,
  publisher: { '@id': `${SITE}/#person` },
  inLanguage: 'en-US',
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#service`,
  name: 'Prashant Ambaliya, Software Engineering Services',
  url: SITE,
  image: `${SITE}/images/photo.jpg`,
  description: 'Contract software engineering: web and mobile apps, cloud infrastructure, integrations, data and AI features for startups and small businesses.',
  founder: { '@id': `${SITE}/#person` },
  areaServed: ['United States', 'Worldwide (remote)'],
  serviceType: ['Web development', 'Mobile app development', 'Cloud infrastructure', 'AI integration', 'Small business websites'],
  priceRange: '$$',
  sameAs: ['https://www.linkedin.com/in/prashant-ambaliya/', 'https://github.com/PrashantAmbaliya'],
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
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd, serviceJsonLd]) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
              <main role="main">{children}</main>
              <Footer />
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
