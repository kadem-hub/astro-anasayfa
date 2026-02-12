// src/config/problem-solution.tr.ts
export const PROBLEM_SOLUTION = {
  title: "Belirsizlik biter, sistem başlar.",
  lead:
    "Veli için şeffaf süreç; öğrenci için net hedef ve disiplin. Her hafta ölç, düzelt, ilerlet.",

  problems: {
    title: "Sık görülen problemler",
    items: [
      "Çalışıyor ama puan artmıyor (yanlış yöntem / yanlış sırayla konu).",
      "Denemelerde aynı hatalar tekrar ediyor (analiz yok, takip yok).",
      "Motivasyon dalgalı (net plan ve ölçülebilir hedef eksik).",
    ],
  },

  solution: {
    title: "Benim yaklaşımım",
    items: [
      "Seviye tespiti + hedefe göre önceliklendirme",
      "Kişisel plan + haftalık ödev/deneme kontrolü",
      "Hata analizi + düzenli geri bildirim (veli dahil)",
    ],
  },

  system: {
    eyebrow: "3 Adımlı Sistem",
    steps: [
      {
        title: "1) Analiz",
        desc: "Seviye, eksik konu, soru tipi ve süre problemlerini netleştiririz.",
      },
      {
        title: "2) Plan",
        desc: "Hedef sınava göre (LGS/TYT/AYT) kişisel konu-soru planı çıkarırız.",
      },
      {
        title: "3) Takip",
        desc: "Haftalık kontrol + deneme analizi ile aynı hatayı tekrar ettirmeyiz.",
      },
    ],
  },
} as const;
