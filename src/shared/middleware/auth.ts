import { NavigationGuardNext, Route } from 'vue-router'

const auth = (to: Route, _from: Route, next: NavigationGuardNext) => {
  const isWhiteListPage = ['/auth', '/registration'].includes(to.path)

  if (!isWhiteListPage && !localStorage.getItem('accessToken')) {
    return next('/auth')
  }

  if (isWhiteListPage && localStorage.getItem('accessToken')) {
    return next('/')
  }

  return next()
}

export default auth
