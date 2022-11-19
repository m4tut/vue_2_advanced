import { storiesOf } from '@storybook/vue'

import BaseSpin from './BaseSpin.vue'

storiesOf('BaseSpin', module).add('default', () => ({
  components: { BaseSpin },
  template: `<BaseSpin></BaseSpin>`,
}))
