import { render } from '@testing-library/react'
import { FormattedNumber } from 'react-intl'
import { combineReducers, createStore } from 'redux'
import { intlReducer, Provider } from '../../src/'

test('Provider should render default en locale', () => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const { container } = render(
    <Provider store={store}>
      <FormattedNumber value={1000} />
    </Provider>
  )

  expect(container.textContent).toBe('1,000')
})
