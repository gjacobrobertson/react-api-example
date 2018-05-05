import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const menuStyle = {
  borderRadius: 0,
};

const NavLink = ({ path, children }) => (
  <Menu.Item active={window.location.pathname === path}>
    <Link to={path}>{children}</Link>
  </Menu.Item>
);

const TopMenu = () => (
  <Menu inverted style={menuStyle}>
    <Container>
      <NavLink path="/">People</NavLink>
      <NavLink path="/frequency">Frequency</NavLink>
      <NavLink path="/duplicates">Duplicates</NavLink>
    </Container>
  </Menu>
);

export default TopMenu;
