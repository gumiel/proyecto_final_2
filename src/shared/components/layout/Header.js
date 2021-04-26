import { useState } from 'react';

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem } from 'reactstrap';
// import ThemeContext from '../../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [theme] = useState('dark');
  // const { theme } = useContext(ThemeContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="md">
        <NavbarBrand href="/">Book Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newBook">New Book</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;