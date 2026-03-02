import { FormattedMessage } from 'react-intl'
import { createStore, combineReducers } from 'redux'
import { IntlProvider, intlReducer } from 'react-intl-redux'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

const reducer = combineReducers({
  intl: intlReducer
})
const initialState = {
  intl: {
    defaultLocale: 'zh',
    locale: 'it',
    messages: {
      'app.greeting': 'Ciao!'
    }
  }
}
const store = createStore(reducer, initialState)

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <p>
        <FormattedMessage id="app.greeting" defaultMessage="你好!" />
      </p>
    </IntlProvider>
  </Provider>
)

createRoot(document.getElementById('root')).render(<App />)
