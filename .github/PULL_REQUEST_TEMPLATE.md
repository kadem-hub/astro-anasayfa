# PR Başlığı
Kısa, net: “feat: … / fix: … / chore: …”

## 🎯 Amaç / Özet
- Bu PR neyi değiştiriyor?
- Hangi kullanıcı problemine / hedefe hizmet ediyor?

## 🔍 Değişiklik Kapsamı
- [ ] UI / Görsel düzen
- [ ] Copy / içerik metinleri
- [ ] SEO / meta / schema
- [ ] Analytics / GTM event kancaları
- [ ] Performans / Core Web Vitals
- [ ] Deploy / NGINX / server

## 🧪 Test Kanıtı
- Çalıştırılan komutlar:
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- Ekran görüntüsü / kısa video (varsa):
  - …

## ✅ Checklist (Merge öncesi)
- [ ] Dış bağımlılık yok (dış font/CDN yok, tüm asset’ler repoda)
- [ ] Lighthouse hedefi: Perf 95+ (en azından yerelde kontrol edildi)
- [ ] LCP görseli `eager` + `fetchpriority="high"` (Hero için)
- [ ] CTA’larda GTM standardı var:
  - `data-event="conversion" data-category data-action="click" data-label`
- [ ] `robots.txt` ve `sitemap.xml` güncel (gerekliyse)
- [ ] Kırık link yok (`tel:` / `wa.me` / internal linkler)

## 📌 Notlar / Riskler
- Risk / trade-off var mı?
- Geri alma planı (rollback) var mı?

## 🔗 İlgili Issue / Görev
- Closes #…
- Related: …
