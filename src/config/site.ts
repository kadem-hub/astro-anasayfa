// src/config/site.ts
export const SITE = {
  domain: 'https://ahmatematik.com',
  whatsappNumber: '905465037450',
  phoneNumber: '905465037450',
  phoneDisplay: '0546 503 74 50',
  gtmId: 'GTM-5QTQ3DGV',
  social: {
    instagram: 'https://www.instagram.com/',
  },
  footerNav: {
    programs: [
      { label: 'LGS Matematik Özel Ders', href: '/lgs-matematik-ozel-ders' },
      { label: 'TYT Matematik Özel Ders', href: '/tyt-matematik-ozel-ders' },
      { label: 'AYT Matematik Özel Ders', href: '/ayt-matematik-ozel-ders' },
      { label: 'Online Matematik Özel Ders', href: '/online-matematik-ozel-ders' },
      { label: 'Ankara Matematik Özel Ders', href: '/ankara-matematik-ozel-ders' },
    ],
    content: [
      { label: 'Matematik Köşesi', href: '/matematik-kosesi' },
      { label: 'Yeni Nesil Sorular', href: '/yeni-nesil-sorular' },
      { label: 'Matematik Korkusu', href: '/matematik-korkusu' },
      { label: 'Ders Çalışma Programı', href: '/ders-calisma-programi' },
      { label: 'Sınav Motivasyonu', href: '/sinav-motivasyonu' },
    ],
    corporate: [
      { label: 'Hakkımda', href: '/hakkimda' },
      { label: 'Programlar', href: '/programlar' },
      { label: 'Yorumlar', href: '/yorumlar' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
} as const;

export function getWhatsAppLink(number: string): string {
  // wa.me formatı: + yok, boşluk yok
  return `https://wa.me/${number}`;
}

export function getTelLink(number: string): string {
  // tel: için + kullanmak normal
  return `tel:+${number}`;
}
