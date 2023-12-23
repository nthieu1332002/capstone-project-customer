import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://chanhxemientay.vercel.app'
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/partner`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/tracking`,
      lastModified: new Date(),
    },
  ]
}