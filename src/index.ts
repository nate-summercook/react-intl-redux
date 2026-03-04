import type { IntlState } from './types';

export { default as IntlProvider } from './components/IntlProvider';
export { default as Provider } from './components/Provider';
export type { IntlState } from './types';

export const UPDATE = '@@intl/UPDATE' as const;

export interface IntlAction {
  type: typeof UPDATE;
  payload: Partial<IntlState>;
}

export const updateIntl = ({ locale, formats, messages }: Partial<IntlState>): IntlAction => ({
  type: UPDATE,
  payload: { locale, formats, messages },
});

export const initialState: IntlState = {
  locale: 'en',
  messages: {},
};

export function intlReducer(
  state: IntlState = initialState,
  action: { type: string; payload?: Partial<IntlState> },
): IntlState {
  if (action.type !== UPDATE) {
    return state;
  }
  return { ...state, ...action.payload };
}
