import { configureStore, createSlice } from '@reduxjs/toolkit';
import { intlReducer } from '@nate-summercook/react-intl-redux';

const localesSlice = createSlice({
  name: 'locales',
  initialState: {},
  reducers: {
    updateLocales(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateLocales } = localesSlice.actions;

// Redux DevTools Extension is automatically enabled by configureStore.
// Install the browser extension to inspect state:
// https://github.com/reduxjs/redux-devtools/tree/main/extension
const store = configureStore({
  reducer: {
    intl: intlReducer,
    locales: localesSlice.reducer,
  },
});

export default store;
