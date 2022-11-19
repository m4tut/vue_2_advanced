import { render, screen } from '@testing-library/vue'

import AppNavigation from './AppNavigation.vue'

describe('<AppNavigation />', () => {
  test('Render component', () => {
    render(AppNavigation)

    screen.debug()
  })
})
