import React from 'react';
import { GiGuitar } from 'react-icons/gi';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import guitar_logo from '../images/guitar_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header id='header'>
      <Navbar color='light' id='nav-bar' dark expand='md'>
        <div className='container'>
          <NavbarBrand href='/'>
            <div className='logo-container'>
              <img
                src={
                  'https://i2.wp.com/www.classicalguitarcorner.com/wp-content/uploads/CGC-Logo-250.png?ssl=1'
                }
                className='logo'
                id='header-img'
              />
              <div className='logo-text'>GPB Guitars</div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#features'>Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#how-it-works'>How It Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#pricing'>Pricing</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
