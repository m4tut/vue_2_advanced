import { render } from '@testing-library/vue'

import BaseLink from './BaseLink.vue'

describe('<BaseLink />', () => {
  test('Render component', () => {
    const options = {
      props: {
        href: '/test',
      },
    }

    render(BaseLink, options)
  })
})
