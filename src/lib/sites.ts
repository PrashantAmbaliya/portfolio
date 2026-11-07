import fs from 'fs';
import path from 'path';

export type Review = { author: string; rating: number; text: string; when: string };
export type Service = { title: string; desc: string };
export type SiteSpec = {
  id: string;
  name: string;
  type: string;
  category: string;
  group: string;
  town: string;
  tagline: string;
  headline: string;
  intro: string;
  about: string[];
  services: Service[];
  whyUs: { title: string; desc: string }[];
  phone?: string | null;
  phoneHref?: string | null;
  address: string;
  mapsUrl?: string | null;
  lat?: number | null;
  lng?: number | null;
  rating?: number | null;
  reviewCount?: number;
  hours?: string[] | null;
  openNow?: boolean | null;
  photos: string[];
  reviews: Review[];
  theme: { primary: string; accent: string; bg: string; ink: string; soft: string; onPrimary: string };
  builtAt: string;
  builder: { name: string; url: string; email?: string; phone?: string };
};

const DIR = path.join(process.cwd(), 'content', 'sites');

export function listSiteIds(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
}

export function loadSite(id: string): SiteSpec | null {
  const f = path.join(DIR, `${id}.json`);
  if (!/^[a-z0-9-]+$/i.test(id) || !fs.existsSync(f)) return null;
  return JSON.parse(fs.readFileSync(f, 'utf-8')) as SiteSpec;
}
