import { useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LanguageContext } from 'services/contexts';
import { defaultLanguage, setLanguage } from 'services/language';

const languages = [
  {
    id: 'en',
    name: 'English',
    image: '/assets/icons/flags/flag-canada.svg',
  }, 
  {
    id: 'fr',
    name: 'Français',
    image: '/assets/icons/flags/flag-quebec.png',
  }
];

interface LanguageSelectorProps {
  onChange: (language: string) => void;
}

function LanguageSelector({
  onChange,
}: LanguageSelectorProps) {
  const language = useContext(LanguageContext);
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
              setLanguage(otherLanguage.id);
              onChange(otherLanguage.id);
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
