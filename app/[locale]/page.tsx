
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { type AppLocale, routing } from '@/i18n/routing';
import { getT } from '@/i18n/server-t';
type PageProps = {
  params: Promise<{ locale: AppLocale }>;
}; 

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getT();

  return {
    title: t.pages.home.title,
    description: t.pages.home.description,
    openGraph: {
      description: t.pages.home.description
    }
  };
}

export default async function Home({params}: PageProps) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
    </div>
  );
}
