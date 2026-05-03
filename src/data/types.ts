export interface GalleryItem {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  category: 'traditional' | 'modern' | 'student';
  imageAlt: {
    tr: string;
    en: string;
  };
}

export interface Course {
  id: string;
  type: 'inPerson' | 'online' | 'group';
}

export interface BlogPost {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  excerpt: {
    tr: string;
    en: string;
  };
  category: 'techniques' | 'history' | 'stories';
  date: string;
  slug: string;
}

export interface ShopProduct {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  price: number;
  category: 'prints' | 'supplies';
}
