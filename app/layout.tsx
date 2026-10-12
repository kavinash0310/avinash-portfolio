import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const portfolioUrl = 'https://avinash-kumar-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: 'Avinash Kumar | Java Backend Developer',
  description: 'Java backend developer with three years of BFSI experience building Spring Boot services, secure REST APIs, and practical full-stack products.',
  keywords: ['Avinash Kumar', 'Java Backend Developer', 'Spring Boot', 'Microservices', 'BFSI', 'Full Stack Developer'],
  openGraph: {
    title: 'Avinash Kumar | Java Backend Developer',
    description: 'Spring Boot, microservices, secure APIs, and selected product work.',
    url: portfolioUrl,
    siteName: 'Avinash Kumar Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable + ' ' + geistMono.variable + ' antialiased'}>
        {children}
      </body>
    </html>
  );
}
