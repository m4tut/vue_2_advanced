import Vue from 'vue'
import VueRouter, { RedirectOption, RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const route = (
  path: string,
  name: string,
  redirect?: RedirectOption,
): RouteConfig => {
  return {
    path,
    name,
    redirect,
    component: (resolve) => import(`@pages/${name}.vue`).then(resolve),
  }
}

const routes: Array<RouteConfig> = [
  route('/', 'PageMain'),
  route('/:catchAll(.*)', 'Error404'),
]

export default new VueRouter({
  mode: 'history',
  routes,
})
