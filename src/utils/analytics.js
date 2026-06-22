const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export function initAnalytics() {
  if (!measurementId || typeof window === 'undefined') return false
  if (window.__vitalAnalyticsInitialized) return true

  window.__vitalAnalyticsInitialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: false
  })

  return true
}

export function trackPageView(pagePath, pageTitle = document.title) {
  if (!initAnalytics()) return

  const now = Date.now()
  if (window.__vitalLastPageView?.path === pagePath && now - window.__vitalLastPageView.time < 1000) {
    return
  }

  window.__vitalLastPageView = { path: pagePath, time: now }
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: pagePath,
    page_title: pageTitle
  })
}

export function trackEvent(eventName, parameters = {}) {
  if (!initAnalytics()) return
  window.gtag('event', eventName, {
    ...parameters,
    transport_type: 'beacon'
  })
}

export function setupBehaviorTracking() {
  if (!initAnalytics()) return () => {}

  const reachedThresholds = new Set()
  const scrollThresholds = [25, 50, 75, 90]
  const trackScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollableHeight <= 0) return

    const scrollPercent = Math.round((window.scrollY / scrollableHeight) * 100)
    scrollThresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !reachedThresholds.has(threshold)) {
        reachedThresholds.add(threshold)
        trackEvent('scroll_depth', { percent_scrolled: threshold })
      }
    })
  }

  window.addEventListener('scroll', trackScroll, { passive: true })

  const timers = [30, 60, 120].map((seconds) => (
    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        trackEvent('engagement_time', { seconds_engaged: seconds })
      }
    }, seconds * 1000)
  ))

  return () => {
    window.removeEventListener('scroll', trackScroll)
    timers.forEach((timer) => window.clearTimeout(timer))
  }
}
