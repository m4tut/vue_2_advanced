import { IRootState } from '@interfaces/store/root'
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Vue, { ComponentOptions } from 'vue'
import { Store } from './index'

declare module 'vue/types/options' {
  // eslint-disable-next-line no-unused-vars
  interface ComponentOptions<V extends Vue> {
    store?: Store<IRootState>
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<IRootState>
  }
}

export type Map<S> = {
  [K in keyof S]: () => S[K]
}
