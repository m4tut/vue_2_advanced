import { storiesOf } from '@storybook/vue'

import BaseButton from './BaseButton.vue'

storiesOf('BaseButton', module).add('default', () => ({
  components: { BaseButton },
  template: `<BaseButton></BaseButton>`,
}))
