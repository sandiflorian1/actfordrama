import { Studio } from 'sanity'
import config from '@/sanity/sanity.config'
import { isSanityConfigured } from '@/sanity/env'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 font-sans">
        <h1 className="font-serif text-3xl">Sanity is not configured yet</h1>
        <ol className="mt-6 list-decimal space-y-2 text-sm text-muted-foreground">
          <li>
            Create a free project at <code>sanity.io/manage</code> and copy the project ID.
          </li>
          <li>
            Add it to <code>.env</code> as <code>VITE_SANITY_PROJECT_ID</code>.
          </li>
          <li>
            Restart <code>npm run dev</code> and reload this page.
          </li>
        </ol>
      </div>
    )
  }

  return <Studio config={config} />
}
