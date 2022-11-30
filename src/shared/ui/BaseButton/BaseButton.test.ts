import { render } from '@testing-library/vue'

import BaseButton from './BaseButton.vue'

describe('<BaseButton />', () => {
  test('Render component', () => {
    render(BaseButton)
  })
})
