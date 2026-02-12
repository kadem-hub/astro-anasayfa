// src/config/site.ts
export const SITE = {
  domain: 'https://ahmatematik.com',
  whatsappNumber: '905465037450',
  gtmId: 'GTM-5QTQ3DGV',
} as const;

export function getWhatsAppLink(number: string): string {
  // wa.me formatı: + yok, boşluk yok
  return `https://wa.me/${number}`;
}

export function getTelLink(number: string): string {
  // tel: için + kullanmak normal
  return `tel:+${number}`;
}
