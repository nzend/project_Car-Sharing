import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { GiCityCar } from 'react-icons/gi';

import {
  NavigationList,
  NavigationItem,
  NavigationLink,
  Logo,
  Menu,
  IconHome,
  IconCatalog,
  IconFavorite,
} from './Navigation.styled';

const Navigation = () => {
  let activeClassName = {
    color: '#f87719',
  };
  return (
    <>
      <NavigationLink to="/">
        <Logo width={50} height={50} />
      </NavigationLink>

      <Menu>MENU</Menu>
      <nav>
        <NavigationList>
          <NavigationItem>
            <NavigationLink
              to="/"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <IconHome />
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to="/catalog"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <IconCatalog />
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to="/favorites"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <IconFavorite />
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </nav>
    </>
  );
};

export default Navigation;
