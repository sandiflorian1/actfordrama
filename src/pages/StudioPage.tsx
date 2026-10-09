import { Studio } from 'sanity'
import config from '@/sanity/sanity.config'
import { isSanityConfigured } from '@/sanity/env'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 font-sans">
        <h1 className="font-serif text-3xl">Sanity nu este configurat încă</h1>
        <ol className="mt-6 list-decimal space-y-2 text-sm text-muted-foreground">
          <li>
            Creează un proiect gratuit la <code>sanity.io/manage</code> și copiază project ID-ul.
          </li>
          <li>
            Adaugă-l în <code>.env</code> la <code>VITE_SANITY_PROJECT_ID</code>.
          </li>
          <li>
            Repornește <code>npm run dev</code> și reîncarcă pagina.
          </li>
        </ol>
      </div>
    )
  }

  return <Studio config={config} />
}
