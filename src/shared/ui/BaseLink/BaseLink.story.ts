import { storiesOf } from '@storybook/vue'

import BaseLink from './BaseLink.vue'

storiesOf('BaseLink', module).add('default', () => ({
  components: { BaseLink },
  template: `<BaseLink></BaseLink>`,
}))
