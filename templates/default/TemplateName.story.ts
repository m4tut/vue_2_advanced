import { storiesOf } from '@storybook/vue'

import TemplateName from './TemplateName.vue'

storiesOf('TemplateName', module).add('default', () => ({
  components: { TemplateName },
  template: `<TemplateName></TemplateName>`,
}))
