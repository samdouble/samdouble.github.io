import React from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RootState } from 'store';
import LanguageSelector from './LanguageSelector';
import logo from 'logo.png';

function TopMenu() {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Navbar.Brand href="/#/home">
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
          <Nav.Link href="/#/">{language === 'en' ? 'Home' : 'Accueil'}</Nav.Link>
          <Nav.Link href="/#/category/projects">Projets</Nav.Link>
          <Nav.Link href="/#/category/trips">Voyages</Nav.Link>
          <NavDropdown title="Miscellaneous">
            <NavDropdown.Item href="/#/category/book-reviews">Book Reviews</NavDropdown.Item>
            <NavDropdown.Item href="/#/category/movie-reviews">Movie Reviews</NavDropdown.Item>
            <NavDropdown.Item href="/#/category/restaurant-reviews">Restaurant Reviews</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <LanguageSelector />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopMenu;
