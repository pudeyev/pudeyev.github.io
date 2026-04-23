import { useEffect } from 'react'
import { useLocation } from 'react-router'

function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!window._paq) return

    window._paq.push(['setCustomUrl', location.pathname])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }, [location])
}

function useScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname, location.search, location.hash])
}

export {
  useAnalytics,
  useScrollToTop,
}