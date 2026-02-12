// src/config/copy.tr.ts
export const COPY_TR = {
  meta: {
    title: 'Adem Külük | Ankara & Online Matematik Özel Ders (LGS / TYT / AYT)',
    description:
      'Matematik korkusunu sistemli takip ile başarıya çevirin. Veli için şeffaf süreç, öğrenci için net plan ve disiplin. Ankara yüz yüze + online.',
  },

  header: {
    cta: 'WhatsApp ile Yaz',
    homeAria: 'Ana Sayfa',
  },

  hero: {
    eyebrow: 'Ankara • Online • LGS / TYT / AYT',
    h1: 'Matematik Korkusunu Sistemli Takiple Başarıya Çevir.',
    lead:
      'Veli için: düzenli takip ve şeffaf süreç. Öğrenci için: net plan ve disiplin. Ankara yüz yüze + online.',
    bullets: [
      'Seviye tespiti + kişisel plan',
      'Haftalık takip + ödev kontrol',
      'LGS / TYT / AYT odaklı strateji',
    ],
    ctaPrimary: 'WhatsApp ile Yaz',
    ctaSecondary: 'Hemen Ara',
    microProof: 'Hızlı yanıt • Net plan • Düzenli takip',
    imageAlt: 'Adem Külük ders anlatırken öğrenci ile çalışma',
  },

  socialProof: {
    title: 'Gerçek Geri Bildirimler',
    lead: 'Veli için güven, öğrenci için net plan ve disiplin.',
    stats: [
      { k: '15+ yıl', v: 'Tecrübe' },
      { k: '850+ öğrenci', v: 'Takip' },
      { k: 'Düzenli takip', v: 'Süreç' },
    ],
  },

  problemSolution: {
    title: 'Sorun: “Çalışıyorum ama olmuyor.”  Çözüm: Sistem.',
    cards: [
      {
        title: 'Dağınık çalışma',
        desc: 'Plansız ilerleme, konu/deneme dengesizliği ve motivasyon dalgalanması.',
      },
      {
        title: 'Belirsiz hedef',
        desc: 'Hangi konudan, hangi sırayla, hangi ölçekte gidileceği net değil.',
      },
      {
        title: 'Takipsiz süreç',
        desc: 'Ödev, deneme, tekrar ve eksik kapatma rutini oturmuyor.',
      },
    ],
    solutionTitle: 'Benim yaklaşımım',
    solutionBullets: [
      'Seviye tespiti → kişisel yol haritası',
      'Haftalık plan → ölçüm (deneme/ödev) → düzeltme',
      'Veli için şeffaf raporlama, öğrenci için net hedef',
    ],
  },

  steps: {
    title: '3 Adımda Net İlerleme',
    items: [
      {
        title: '1) Analiz',
        desc: 'Seviye tespiti + hedef belirleme. Eksik haritasını çıkarırız.',
      },
      {
        title: '2) Plan',
        desc: 'Konu/deneme/ödev dengeli haftalık plan. Ne zaman, ne kadar: net.',
      },
      {
        title: '3) Takip',
        desc: 'Ödev kontrol + deneme analizi + eksik kapatma. Sürekli güncellenen rota.',
      },
    ],
  },

  faq: {
    title: 'Sık Sorulan Sorular',
    items: [
      {
        q: 'Dersler online mı, yüz yüze mi?',
        a: 'Ankara’da yüz yüze ve Türkiye geneline online ders yapıyorum. İhtiyaca göre birlikte seçeriz.',
      },
      {
        q: 'Hangi sınıflarla çalışıyorsunuz?',
        a: '7–12. sınıf ve mezun öğrenciler. LGS / TYT / AYT odaklı ilerliyoruz.',
      },
      {
        q: 'Ders programı nasıl ilerliyor?',
        a: 'Seviye tespitiyle başlıyoruz. Haftalık plan + ödev kontrol + deneme analizi ile süreç takip ediliyor.',
      },
      {
        q: 'Veli bilgilendirmesi yapılıyor mu?',
        a: 'Evet. Süreç şeffaf: düzenli geri bildirim ve gerekli durumlarda kısa raporlama yapıyorum.',
      },
    ],
  },

  footer: {
    line1: '© ' + new Date().getFullYear() + ' Adem Külük',
    line2: 'Ankara • Online • LGS / TYT / AYT',
  },

  schema: {
    // Basit LocalBusiness + FAQ JSON-LD üretmek için alanlar
    businessName: 'Adem Külük Matematik',
    url: 'https://ahmatematik.com',
    areaServed: 'Ankara, Türkiye (Online)',
  },
} as const;
