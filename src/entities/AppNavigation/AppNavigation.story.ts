import { storiesOf } from '@storybook/vue'

import AppNavigation from './AppNavigation.vue'

storiesOf('AppNavigation', module).add('default', () => ({
  components: { AppNavigation },
  template: `<AppNavigation></AppNavigation>`,
}))
