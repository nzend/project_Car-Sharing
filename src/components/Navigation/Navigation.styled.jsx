import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { RxStitchesLogo } from 'react-icons/rx';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { GiCityCar } from 'react-icons/gi';

export const NavigationList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: ' ';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 50.52%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px 30px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.25s;
  &:hover,
  &:focus {
    color: #f87719;
  }
`;

export const Logo = styled(RxStitchesLogo)`
  width: 50px;
  height: 50px;
  color: #f87719;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const IconHome = styled(BiHomeAlt2)`
  width: 43px;
  height: 43px;
`;
export const IconCatalog = styled(MdFavoriteBorder)`
  width: 43px;
  height: 43px;
`;
export const IconFavorite = styled(GiCityCar)`
  width: 43px;
  height: 43px;
`;
export const Menu = styled.span`
  position: relative;
  color: #fff;
  font-family: Gayathri;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.75;
  margin-bottom: 12px;
  &::after {
    content: ' ';
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 50.52%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
