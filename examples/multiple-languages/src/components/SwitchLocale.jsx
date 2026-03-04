import { useSelector, useDispatch } from 'react-redux';
import { updateIntl } from '@nate-summercook/react-intl-redux';

const SwitchLocale = () => {
  const dispatch = useDispatch();
  const currentLocale = useSelector((state) => state.intl.locale);
  const locales = useSelector((state) => state.locales);

  return (
    <select
      value={currentLocale}
      onChange={(e) =>
        dispatch(
          updateIntl({
            locale: e.target.value,
            messages: locales[e.target.value],
          }),
        )
      }
    >
      {Object.keys(locales).map((locale) => (
        <option key={locale}>{locale}</option>
      ))}
    </select>
  );
};

export default SwitchLocale;
