# Карта французької граматики

Next.js-версія інтерактивної карти французької граматики (30 тем, 6 розділів, 5 етапів).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Структура

- `app/layout.tsx` — `<html lang="uk">`, метадані, шрифти Google Fonts
- `app/globals.css` — усі стилі (світла/темна тема)
- `app/page.tsx` → `components/GrammarMap.tsx` — клієнтський компонент
- `components/markup.ts` — статична розмітка сторінки
- `lib/grammar-app.js` — логіка застосунку (теми, вправи, карта SVG, план, таймер).
  Прогрес зберігається в `localStorage` через об'єкт `Store` — щоб синхронізувати
  між пристроями, достатньо замінити його `get`/`set` на запити до бекенду.
- `grammaire_francaise.html` — оригінальний однофайловий варіант
