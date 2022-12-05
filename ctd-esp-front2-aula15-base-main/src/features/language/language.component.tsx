import { FC } from 'react';
import { useLanguage } from 'features/language/index';

import styled from 'styled-components'



const Language = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
`

const LanguageButton = styled.button`
    background-color: white;
    padding: 4px 2px;
    margin-right: 10px;
`

const ButtonActive = styled.button`
    color: white;
    background-color: #17589f;
`







const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <Language>
      <LanguageButton
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {t('language.spanish')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {t('language.english')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {t('language.portuguese')}
      </LanguageButton>
    </Language>
  );
};
export default LanguageComponent;
