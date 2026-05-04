import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sanatamunhasir.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/tr',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/en',
      lastModified: new Date(),
    },

    // TR
    {
      url: 'https://www.sanatamunhasir.com/tr/egitimler',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/tr/magaza',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/tr/iletisim',
      lastModified: new Date(),
    },

    // EN
    {
      url: 'https://www.sanatamunhasir.com/en/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/en/shop',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sanatamunhasir.com/en/contact',
      lastModified: new Date(),
    },
  ];
}