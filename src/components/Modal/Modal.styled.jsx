import styled from '@emotion/styled';
import { GiCityCar } from 'react-icons/gi';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(22, 22, 22, 0.5);
`;

export const ModalWrap = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  position: absolute;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 40px 35px;
  border-radius: 24px;
  background-color: #FFF;
  z-index: 1;
`;

export const ButtonExit = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  &:hover svg {
    fill: black;
    scale: 1.1;
  }
  &:focus svg {
    fill: black;
    scale: 1.1;
  }
`;

export const CloseBtn = styled(GiCityCar)`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 0.4);
  scale: 1;

  transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;
