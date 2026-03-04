import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import type { IntlState } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectorFunction = (state: any) => IntlState & { key?: string };

const defaultSelector = (state: { intl: IntlState }): IntlState & { key: string } => ({
  key: state.intl.locale,
  ...state.intl,
});

const mapStateToProps = (
  state: unknown,
  { intlSelector = defaultSelector as SelectorFunction }: { intlSelector?: SelectorFunction },
) => intlSelector(state);

export default connect(mapStateToProps)(IntlProvider);
