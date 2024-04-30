import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import './globals.css';

import { ModalProvider } from '@/context/modal-context';
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuzzie',
  description: 'Automate your work with Fuzzie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
