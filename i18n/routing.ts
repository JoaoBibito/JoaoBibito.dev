import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'pt',
  // Default locale (pt) has no prefix, others get a prefix (e.g. /en/about).
  localePrefix: 'as-needed'
});

export type AppLocale = (typeof routing.locales)[number];