export const dynamic = "force-static"

import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data'

const BASE = 'https://focusoninteriors.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/team',
    '/projects',
    '/services',
    '/media',
    '/blog',
    '/career',
    '/contact',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const projectPages = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages]
}
