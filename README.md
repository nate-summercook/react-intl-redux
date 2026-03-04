# React Intl Redux

[Redux](https://github.com/reactjs/redux) binding for [React Intl](https://formatjs.github.io/).

Building idiomatic React Redux Application by
having translations in store and dispatching action to update it.

## Installation

```
npm install @nate-summercook/react-intl-redux react react-intl react-redux redux --save
```

## Usage

<!-- eslint-env browser -->
<!-- eslint-disable no-undef -->

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { intlReducer } from '@nate-summercook/react-intl-redux';
import { FormattedNumber } from 'react-intl';
import reducers from '<project-path>/reducers';

const store = configureStore({
  reducer: {
    ...reducers
    intl: intlReducer,
  },
});

const App = () => (
  <Provider store={store}>
    <FormattedNumber value={1000} />
  </Provider>
);

createRoot(document.getElementById('root')).render(<App />);
```

### Provide `locale` and `messages` on load

You should provide a different `locale` and `messages` if your user is not using `en` locale.

<!-- eslint-disable no-undef, no-unused-vars -->

```js
const initialState = {
  intl: {
    locale: 'it',
    messages: {
      'app.greeting': 'Ciao!',
    },
  },
  // ...other initialState
};
const store = configureStore(reducer, initialState);
```

Refer to the [`initial-locale` example](https://github.com/nate-summercook/react-intl-redux/tree/master/examples/initial-locale) for more details.

### Switch `locale` and `messages` on request

You could also switch `locale` on user's request by dispatching `updateIntl` action.

<!-- eslint-disable no-undef -->

```js
import { useSelector, useDispatch } from 'react-redux'
import { updateIntl } from "@nate-summercook/react-intl-redux";

const dispatch = useDispatch();
const locales = useSelector(state => state.locales);

dispatch(
  updateIntl({
    locale: e.target.value,
    messages: locales[e.target.value],
  });
);
```

React Intl in browsers only contain locale data for basic English
by default, see
[Loading Locale Data](https://github.com/yahoo/react-intl/wiki#loading-locale-data)
for loading locale data in browsers.

### `Provider` vs `IntlProvider`

In most cases, `@nate-summercook/react-intl-redux` will be wrapped immediately after `Provider` from `react-redux`. For convenient, `@nate-summercook/react-intl-redux` provides `Provider` to do that for you.

However, if you don't want it, you could do it manually via [`IntlProvider`](https://formatjs.github.io/docs/react-intl/components#intlprovider). For example,

<!-- eslint-disable no-undef -->

```js
import React from 'react';
import { IntlProvider } from '@nate-summercook/react-intl-redux';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>
);
```

### Formatting Data

`react-intl` provides two ways to format data, see the [official docs](https://formatjs.github.io/docs/react-intl/api).

To change `formats` through [React components](https://formatjs.github.io/docs/react-intl/components),

<!-- eslint-disable no-undef -->

```js
import { useSelector, useDispatch } from 'react-redux';
import { updateIntl } from '@nate-summercook/react-intl-redux';

const dispatch = useDispatch();
const locales = useSelector((state) => state.locales);

dispatch(
  updateIntl({
    locale,
    formats,
    messages,
  }),
);
```

### Use with `redux-immutable`

redux-immutable hasn't been maintained since years, so it's no longer supported. This is how you combine reducers now: [test](https://github.com/nate-summercook/react-intl-redux/blob/master/__tests__/immutable.js).

## Examples

There are some examples under the [`examples`](./examples) folder for reference.

## Troubleshooting

1. Why my connected component does not update after locale change?

By default, `locale` is used as `key` for `IntlProvider`, which will trigger re-render when locale changes, things should just work.

If it doesn't, here are few solutions could be tried,

- Do a `forceUpdate` after changing locale.
- Mark the connecting compoent `{pure: false}`.
- Pass `locale` in `props`.
- Set `key` when dispatching `updateIntl`.
- Provide custom `intlSelector` for `IntlProvider`.

2. How to use `intl` in asynchronous action?

A simple solution would be retrive `intl` object using [`injectIntl`](https://formatjs.github.io/docs/react-intl/api#injectintl-hoc) and pass it in the action payload.
