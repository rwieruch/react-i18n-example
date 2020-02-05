import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation(['translation', 'welcome']);

  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <button type="button" onClick={() => changeLanguage('de')}>
        {t('translation:de')}
      </button>

      <button type="button" onClick={() => changeLanguage('en')}>
        {t('translation:en')}
      </button>

      {/* https://react.i18next.com/latest/usetranslation-hook (2.1) */}
      <h1>{t('welcome:title', 'Hello there.')}</h1>

      <p>{t('welcome:content.textOne', 'Welcome at our place.')}</p>

      {/* https://react.i18next.com/latest/trans-component (2.2) */}
      <p>
        <Trans i18nKey="welcome:content.textTwo">
          Welcome at <strong>our place</strong>.
        </Trans>
      </p>
    </div>
  );
};

export default App;
