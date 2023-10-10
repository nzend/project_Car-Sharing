import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

export const AdvertItem = styled.li`
  width: 274px;
  position: relative;
`;

export const IsFavoriteIcon = styled(AiFillHeart)`
  position: absolute;
  top: 14px;
  right: 20px;
  width: 18px;
  height: 18px;
  fill: ${colors.favoriteAccentColor};
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const IsNotFavoriteIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 14px;
  right: 20px;
  width: 18px;
  height: 18px;
  fill: ${colors.mainWhite};
  transform: scale(1);
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const CarMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  border-radius: 12px;
  background-color: ${colors.btnColor};
  color: ${colors.textWhite};
  padding: 12px 99px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: ${colors.btnHoverColor};
  }
`;

export const CarDiscription = styled.p`
  color: ${colors.textBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 24px;
`;

export const CarConfigTitle = styled.span`
  color: ${colors.textBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const RentalConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const RentalConditionsItem = styled.li`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;

  color: #363535;
  font-family: Montserrat;
  font-size: 12px;

  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const DataAccent = styled.span`
  color: ${colors.accentColor};
  margin-left: 3px;
`;
export const RentalBtn = styled.a`
  border-radius: 12px;
  background-color: ${colors.btnColor};
  color: #fff;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: ${colors.btnHoverColor};
  }
`;
