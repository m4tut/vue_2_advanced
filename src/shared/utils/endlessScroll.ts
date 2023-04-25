const endlessScroll = <D>(
  urlFetching: string,
  elementSelector: string,
  callback: (data: D) => void,
  callbackError?: (error: Error) => void,
): IntersectionObserver => {
  let nextPage = 2

  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) {
        return
      }

      observer.unobserve(entry.target)
      loadNewData(nextPage++)
    },
    { threshold: 0.5 },
  )

  const loadNewData = (page = 1) => {
    const url = new URL(urlFetching)
    url.searchParams.set('page', String(page))

    fetch(url.toString())
      .then((res) => res.json())
      .then((data: D) => {
        callback(data)

        const lastElement = document.querySelector(`${elementSelector}:last-child`)
        if (lastElement) {
          observer.observe(lastElement)
        }
      })
      .catch((err) => {
        if (!callbackError) {
          return
        }

        callbackError(err)
      })
  }

  loadNewData()

  return observer
}

export default endlessScroll
