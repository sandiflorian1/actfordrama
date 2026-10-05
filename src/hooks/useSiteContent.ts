import { useEffect, useState } from 'react'
import { sanityClient, isSanityConfigured } from '@/sanity/client'
import { siteContentQuery, type SiteContent } from '@/sanity/queries'
import { fallbackContent } from '@/lib/fallback'

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(fallbackContent)
  const [loading, setLoading] = useState(isSanityConfigured)

  useEffect(() => {
    if (!isSanityConfigured) return

    let cancelled = false
    sanityClient
      .fetch<SiteContent>(siteContentQuery)
      .then((data) => {
        if (cancelled || !data) return
        setContent({
          settings: { ...fallbackContent.settings, ...data.settings },
          classes: data.classes?.length ? data.classes : fallbackContent.classes,
          features: data.features?.length ? data.features : fallbackContent.features,
          performances: data.performances ?? [],
        })
      })
      .catch((err) => console.error('Sanity fetch failed, using fallback content:', err))
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [])

  return { content, loading }
}
