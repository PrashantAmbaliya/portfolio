import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { listSiteIds, loadSite } from '@/lib/sites';
import Site from './Site';

export const dynamicParams = false;

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return listSiteIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const s = loadSite(id);
  if (!s) return {};
  return {
    title: `${s.name} · ${s.type} in ${s.town}`,
    description: s.tagline,
    openGraph: { title: s.name, description: s.tagline, images: s.photos[0] ? [s.photos[0]] : [] },
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const site = loadSite(id);
  if (!site) notFound();
  return <Site s={site} />;
}
