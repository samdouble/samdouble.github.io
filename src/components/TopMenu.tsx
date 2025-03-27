import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import logo from 'logo.png';

interface TopMenuProps {
  onChangeLanguage: (language: string) => void;
}

function TopMenu({
  onChangeLanguage,
}: TopMenuProps) {
  const { t } = useTranslation();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Navbar.Brand href="/#/">
        <img
          src={logo}
          alt="samdouble"
          style={{
            borderRadius: '50%',
            marginRight: 10,
          }}
          width={30}
        />
        samdouble
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="/#/">{t('home')}</Nav.Link>
          <Nav.Link href="/#/category/projects">{t('projects')}</Nav.Link>
          <Nav.Link href="/#/category/trips">{t('trips')}</Nav.Link>
          <NavDropdown title={t('reviews')}>
            <NavDropdown.Item href="/#/category/book-reviews">{t('books')}</NavDropdown.Item>
            <NavDropdown.Item href="/#/category/game-reviews">{t('games')}</NavDropdown.Item>
            <NavDropdown.Item href="/#/category/movie-reviews">{t('movies')}</NavDropdown.Item>
            <NavDropdown.Item href="/#/category/restaurant-reviews">{t('restaurants')}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <LanguageSelector
          onChange={onChangeLanguage}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopMenu;
