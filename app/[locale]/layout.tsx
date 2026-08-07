
import type { Metadata, Viewport } from 'next';
import {hasLocale, NextIntlClientProvider } from 'next-intl';
import { cn } from '@/lib/cn';
import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { messages } from '@/i18n/messages';
import { TooltipProvider } from '@/components/tooltip';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
 
const fontSans = localFont({
  src: [
    {
      path: '../font/Biotif-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../font/Biotif-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../font/Biotif-Bold.woff2',
      style: 'normal',
      weight: '700'
    },
    {
      path: '../font/Biotif-RegularItalic.woff2',
      style: 'italic',
      weight: '400'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
});

const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: '500'
});

const fontHeading = localFont({
  src: [
    {
      path: '../font/NeuzeitGrotesk-Bold.woff2',
      style: 'normal',
      weight: '400'
    }
  ],
  weight: '400',
  display: 'swap',
  variable: '--font-heading'
});

export const metadata = {
  metadataBase: new URL('https://joaobibito.dev'),
  title: 'João Vitor',
  creator: 'João Vitor',
  alternates: {
    canonical: 'https://joaobibito.dev',
    languages: {
      en: 'https://joaobibito.dev/en',
      pt: 'https://joaobibito.dev/'
    }
  },
  authors: [
    {
      name: 'João Vitor',
      url: 'https://joaobibito.dev'
    }
  ],
  keywords: ['João', 'Vitor','JoaoBibito', 'JoãoBibito', 'joaobibito.dev', 'Bibito', 'João Vitor Bibito', 'João Vitor', 'João Vitor Bibito', 'João Vitor Bibito', 'João Vitor Bibito', 'João Vitor Bibito', 'João Vitor Bibito', 'João Vitor Bibito', 'João Vitor Bibito'],
  openGraph: {
    type: 'website',
    title: 'João Vitor',
    url: 'https://joaobibito.dev'
  }
} satisfies Metadata;
      

export const viewport = {
  themeColor: '#08070b',
  colorScheme: 'dark'
} satisfies Viewport;

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this segment.
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={cn(
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable
        )}
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages[locale] as unknown as Record<string, unknown>}
        > 
        <TooltipProvider delayDuration={150}>
          {children}
        </TooltipProvider>
        </NextIntlClientProvider>
        </body>
       </html>
  );
}