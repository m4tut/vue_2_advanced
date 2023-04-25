const anchorMenuTabSwitching = (
  sectionsSelector: string,
  linksSelector: string,
  linksActiveClass = 'active',
): IntersectionObserver => {
  const sections = document.querySelectorAll(sectionsSelector)
  const links = document.querySelectorAll(linksSelector)

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        links.forEach((link) => link.classList.remove(linksActiveClass))

        const activeId = entry.target.id
        const activeLink = document.querySelector(`${linksSelector}[href="#${activeId}"]`)

        if (activeLink) {
          activeLink.classList.add(linksActiveClass)
        }
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    threshold: [0.2, 0.5, 0.8],
  })

  sections.forEach((sec) => {
    observer.observe(sec)
  })

  return observer
}

export default anchorMenuTabSwitching
