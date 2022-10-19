import { storiesOf } from '@storybook/vue'

import UiTest from './UiTest.vue'

storiesOf('UiTest', module).add('default', () => ({
  components: { UiTest },
  template: `<UiTest></UiTest>`,
}))
