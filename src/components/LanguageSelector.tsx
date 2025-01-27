import React from 'react';
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { defaultLanguage, setLanguage } from 'services/language';

const languages = [
  {
    id: 'en',
    name: 'English',
    image: '/assets/icons/flags/flag-usa.webp',
  }, 
  {
    id: 'fr',
    name: 'Français',
    image: '/assets/icons/flags/flag-quebec.png',
  }
];

function LanguageSelector() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const selectedLanguage = languages.find(l => l.id === language) || languages.find(l => l.id === defaultLanguage);
  const otherLanguages = languages.filter(l => l.id !== selectedLanguage?.id);

  return (
    <NavDropdown
      align="end"
      title={
        <>
          <img
            src={selectedLanguage?.image}
            alt="samdouble"
            style={{
              marginRight: 10,
            }}
            width={25}
          />
          {selectedLanguage?.name}
        </>
      }
    >
      {
        otherLanguages.map(otherLanguage => (
          <NavDropdown.Item
            key={otherLanguage.id}
            onClick={() => {
              dispatch(setLanguage({ language: otherLanguage.id }));
            }}
          >
            <img
              src={otherLanguage.image}
              alt="samdouble"
              style={{
                marginRight: 10,
              }}
              width={25}
            />
            {otherLanguage.name}
          </NavDropdown.Item>
        ))
      }
    </NavDropdown>
  );
}

export default LanguageSelector;
