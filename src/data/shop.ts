import { ShopProduct } from './types';

export const shopProducts: ShopProduct[] = [
  {
    id: '1',
    title: {
      tr: 'Battal Ebru Sanat Baskısı (A3)',
      en: 'Battal Ebru Art Print (A3)',
    },
    description: {
      tr: 'Yüksek kaliteli kağıda profesyonel baskı. Çerçeveli veya çerçevesiz seçenekler.',
      en: 'Professional print on high quality paper. Framed or unframed options.',
    },
    price: 450,
    category: 'prints',
  },
  {
    id: '2',
    title: {
      tr: 'Çiçekli Şal Ebru Baskısı (A4)',
      en: 'Flowered Shawl Ebru Print (A4)',
    },
    description: {
      tr: 'Zarif çiçek desenleriyle özel Ebru baskısı. Ev ve ofis dekorasyonu için ideal.',
      en: 'Special Ebru print with elegant floral patterns. Ideal for home and office decoration.',
    },
    price: 350,
    category: 'prints',
  },
  {
    id: '3',
    title: {
      tr: 'Başlangıç Ebru Seti',
      en: 'Beginner Ebru Set',
    },
    description: {
      tr: 'Kitre tozu, öd, temel boyalar, tarak ve kıl fırça içeren komple başlangıç seti.',
      en: 'Complete starter set including kitre powder, gall, basic paints, comb and hair brush.',
    },
    price: 850,
    category: 'supplies',
  },
  {
    id: '4',
    title: {
      tr: 'Premium Ebru Boyaları (12 Renk)',
      en: 'Premium Ebru Paints (12 Colours)',
    },
    description: {
      tr: 'Profesyonel kalitede doğal pigmentli Ebru boyaları. 12 temel renk seti.',
      en: 'Professional quality natural pigment Ebru paints. 12 basic colour set.',
    },
    price: 680,
    category: 'supplies',
  },
  {
    id: '5',
    title: {
      tr: 'El Yapımı Ebru Tarağı',
      en: 'Handmade Ebru Comb',
    },
    description: {
      tr: 'Geleneksel yöntemlerle üretilmiş ahşap Ebru tarağı. İnce ve kalın seçenekler.',
      en: 'Wooden Ebru comb made with traditional methods. Fine and thick options.',
    },
    price: 220,
    category: 'supplies',
  },
  {
    id: '6',
    title: {
      tr: 'Modern Yorum Ebru Serisi (Set)',
      en: 'Modern Interpretation Ebru Series (Set)',
    },
    description: {
      tr: '3 parçalık çağdaş Ebru baskı serisi. Her biri 30x40 cm boyutunda.',
      en: '3-piece contemporary Ebru print series. Each 30x40 cm in size.',
    },
    price: 1200,
    category: 'prints',
  },
];
