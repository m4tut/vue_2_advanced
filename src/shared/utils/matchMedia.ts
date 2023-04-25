const matchMedia = (media: number) => {
  return window.matchMedia(`(min-width: ${media}px)`).matches
}

export default matchMedia
