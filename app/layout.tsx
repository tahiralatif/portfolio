import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TR| Full Stack Developer',
  description: 'Professional portfolio of Tahira Rajput, a Full Stack Developer specializing in modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='max-w-screen-xl mx-auto'>
          <Navbar />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer/>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}