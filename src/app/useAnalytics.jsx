
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!window._paq) return

    window._paq.push(['setCustomUrl', location.pathname])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }, [location])
}
