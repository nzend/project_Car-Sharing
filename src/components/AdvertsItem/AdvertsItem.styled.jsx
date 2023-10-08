import styled from '@emotion/styled';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

export const AdvertItem = styled.li`
  position: relative;
`;
export const CarImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const IsFavoriteIcon = styled(AiFillHeart)`
  position: absolute;
  top: 14px;
  right: 20px;
  width: 18px;
  height: 18px;
  fill: rgba(52, 112, 255, 1);
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
  fill: white;
  transform: scale(1);
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const CarDiscription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarTitle = styled.span`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 8px;
`;

export const ModelAccent = styled.span`
  color: #3470ff;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  width: 100%;
  margin-bottom: 28px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;
export const InfoItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -6px;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const SubmitBtn = styled.button`
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  padding: 12px 99px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: #0b44cd;
  }
`;
