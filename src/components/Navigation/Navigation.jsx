import css from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { GiCityCar } from 'react-icons/gi';
import { RxStitchesLogo } from 'react-icons/rx';

const Navigation = () => {
    let activeClassName = {
      color: '#f87719',
    };
  return (
    <>
     <NavLink 
            className={css.navigation__link}
            to="/" 
          >
            <RxStitchesLogo className={css.logo}/>
          </NavLink>
    
    <span className={css.menu}>MENU</span>
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <NavLink 
            className={css.navigation__link}
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <BiHomeAlt2 className={css.icons}/>
          </NavLink>
        </li>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/catalog"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <GiCityCar className={css.icons}/>
          </NavLink>
        </li>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/favorites"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <MdFavoriteBorder className={css.icons} />
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navigation;