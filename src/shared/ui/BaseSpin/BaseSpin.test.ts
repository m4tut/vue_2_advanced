import { render, screen } from '@testing-library/vue'

import BaseSpin from './BaseSpin.vue'

describe('<BaseSpin />', () => {
  test('Render component', () => {
    render(BaseSpin)

    screen.debug()
  })
})
