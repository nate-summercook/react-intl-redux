import { render } from '@testing-library/react'
import { FormattedNumber } from 'react-intl'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { IntlProvider, intlReducer } from '../../src/'

test('IntlProvider should render default en locale', () => {
  const reducer = combineReducers({
    intl: intlReducer
  })
  const store = createStore(reducer)
  const { container } = render(
    <Provider store={store}>
      <IntlProvider>
        <FormattedNumber value={1000} />
      </IntlProvider>
    </Provider>
  )

  expect(container.textContent).toBe('1,000')
})
