import type { IntlConfig } from 'react-intl';

export interface IntlState {
  locale: string;
  messages: IntlConfig['messages'];
  formats?: IntlConfig['formats'];
  defaultLocale?: IntlConfig['defaultLocale'];
  defaultFormats?: IntlConfig['defaultFormats'];
  textComponent?: IntlConfig['textComponent'];
  onError?: IntlConfig['onError'];
}
