import { render, screen } from '@testing-library/vue'

import TemplateName from './TemplateName.vue'

describe('<TemplateName />', () => {
  test('Render component', () => {
    render(TemplateName)

    screen.debug()
  })
})
