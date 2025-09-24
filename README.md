# ერთგვერდიანი პორტფოლიო

Minimal, სწრაფი და ადვილად გაფართოებადი პორტფოლიო HTML / CSS / JS-ზე. ეძღვნება Full Stack Web Developer პროფილს (React / Next.js / TypeScript / Node.js / Supabase / WordPress Maintenance).

## სტრუქტურა
```
index.html   -markup & სექციები
styles.css   -თემები, responsive স্টილი
script.js    -პროექტების რენდერი, თემა, ნავიგაცია
```

## რედაქტირება
1. გახსენი `index.html` საჭიროების შემთხვევაში და განაახლე დამატებითი ტექსტები (სახელი უკვე მითითებულია: Zaza Liparteliani).
2. დაამატე ან შეცვალე უნარები `#skills` სექციაში (ჩანამატებულია WordPress Maintenance მაგალითად).
3. პროექტების ჩამატება ხდება `script.js` ფაილში `PROJECTS` მასივში.
```js
{
  title: 'Project Name',
  year: 2025,
  type: 'MVP' | 'Production' | 'Open Source',
  description: 'მოკლე აღწერა',
  stack: ['React','TypeScript','API'],
  live: 'https://...', // ან '#'
  repo: 'https://github.com/...'
}
```
ან შეგიძლია დინამიურად გამოიძახო:
```js
window.__PORTFOLIO__.addProject({ /* ობიექტი */ })
```

## თემა (Dark / Light)
თემა ინახება `localStorage`-ში გასაღებით `preferred-theme`. ღილაკი 🌓 ცვლის კლასს `light-theme` `<html>`-ზე.

## ხელმისაწვდომობა
- სექციები სემანტიკური landmark-ებით
- Skip link (`TAB`-ზე ჩნდება)
- Focus სტილები გამოკვეთილი
- Reduced motion მხარდაჭერა

## Deployment (GitHub Pages)
1. შექმენი ახალი repository.
2. ატვირთე ეს სამი ფაილი root-ში.
3. Settings → Pages → Source: `main / root`.
4. დაელოდე build-ს და გახსენი გაცემული URL.

## მომდევნო ნაბიჯები (არჩევით)
- Open Graph / social meta tag-ები
- Lighthouse ოპტიმიზაცია (img lazy-loading, meta description გაფართოება)
- Contact ფორმა (Formspree / Supabase)
- i18n (ქართული / ინგლისური ჩართვა)

## ავტორი
**Zaza Liparteliani**  
GitHub: https://github.com/lipo541  
LinkedIn: https://www.linkedin.com/in/zaza-liparteliani-198913276/  
Email: zaza.liparteliani888@gmail.com

Good luck 🚀
