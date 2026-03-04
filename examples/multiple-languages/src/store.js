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

const store = configureStore({
  reducer: {
    intl: intlReducer,
    locales: localesSlice.reducer,
  },
});

export default store;
