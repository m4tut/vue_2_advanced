import { render, screen } from '@testing-library/vue'

import BaseLink from './BaseLink.vue'

describe('<BaseLink />', () => {
  test('Render component', () => {
    render(BaseLink)

    screen.debug()
  })
})
