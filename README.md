# Act IV Drama Studio

Site prezentare pentru un studio de teatru — React + Vite + Tailwind CSS + shadcn/ui, cu conținut editabil prin Sanity (Studio integrat la `/studio`).

Fără configurare Sanity, site-ul afișează conținut de fallback (cel din `src/lib/fallback.ts`).

## Comenzi

```bash
npm run dev      # dev server
npm run build    # typecheck + build de producție
npm run preview  # preview build
npm run lint     # oxlint
```

## Setup Sanity (o singură dată)

1. **Creează cont + proiect** la [sanity.io/manage](https://www.sanity.io/manage) → "Create project" → copiază **Project ID**.

2. **Completează `.env`** (există deja în root, vezi `.env.example`):

   ```
   VITE_SANITY_PROJECT_ID=<project-id-ul-tau>
   VITE_SANITY_DATASET=production
   ```

3. **Adaugă origini CORS** în sanity.io/manage → proiectul tău → API → CORS Origins:
   - `http://localhost:5199` (sau portul tău de dev)
   - domeniul de producție când îl ai

4. **Restart** `npm run dev`, apoi deschide `http://localhost:5199/studio` și autentifică-te cu contul Sanity.

5. **Creează conținutul** în Studio:
   - *Site Settings* (document unic): nume, titlu hero, tagline, butoane, email, social
   - *Class Groups*: grupele de vârstă / clase
   - *Features*: secțiunea "Why us"
   - *Performances*: spectacole (secțiunea apare doar dacă există documente)

După publish, site-ul preia automat conținutul (fără rebuild — datele vin live din Sanity CDN).

## Structură

```
src/
  sanity/
    env.ts            # projectId / dataset din .env
    client.ts         # clientul @sanity/client
    sanity.config.ts  # config Studio (mount la /studio)
    schemas/          # siteSettings, classGroup, feature, performance
    queries.ts        # query GROQ + tipuri TS
  components/
    ui/               # componente shadcn/ui
    site/             # Navbar, Hero, Classes, Why, Performances, Footer
  hooks/useSiteContent.ts   # fetch Sanity cu fallback
  lib/fallback.ts           # conținut default (mockup)
  pages/
    HomePage.tsx
    StudioPage.tsx          # <Studio /> lazy-loaded
```

## Deploy

Orice hosting static (Netlify, Vercel). `public/_redirects` e deja setat pentru SPA routing — `/studio` funcționează și în producție, în aceeași aplicație.
