const imageLazyLoading = (
  selector = '.lazy-loading',
  rootMargin = '250px 0px 250px',
): IntersectionObserver => {
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) {
        return
      }

      if (target instanceof HTMLImageElement) {
        target.src = target.dataset.src || ''
      } else if (target instanceof HTMLElement) {
        target.style.backgroundImage = target.dataset.src || ''
      }

      observer.unobserve(target)
    })
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin,
  })

  document.querySelectorAll(selector).forEach((image) => observer.observe(image))

  return observer
}

export default imageLazyLoading
