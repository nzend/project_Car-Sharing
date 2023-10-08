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
        <Logo />
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
              <IconFavorite />
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to="/favorites"
              style={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              <IconCatalog />
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </nav>
    </>
  );
};

export default Navigation;
