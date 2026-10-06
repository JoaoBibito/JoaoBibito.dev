import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  // Always use a prefix so /pt and /en are real routes; / redirects to /pt.
  localePrefix: 'always',
  localeDetection: false
});

export type AppLocale = (typeof routing.locales)[number];