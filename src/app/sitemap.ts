import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aquarela60.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/oficinas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/noticias`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
