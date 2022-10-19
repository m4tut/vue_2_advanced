import { render, screen } from '@testing-library/vue'

import UiTest from './UiTest.vue'

describe('<UiTest />', () => {
  test('Render component', () => {
    render(UiTest)

    screen.debug()
  })
})
