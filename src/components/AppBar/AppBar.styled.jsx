import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1280px;
  height: 100vh - 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  padding: 50px 0 32px;
`;

export const SideBar = styled.aside`
  position: fixed;
  top: 0;
  /* left: 220px; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #171717;
  width: 100px;
  height: 100vh;
  box-shadow: 0px -7px 16px 0px rgba(255, 255, 255, 0.2) inset;
  border: 1px solid #939393;
`;

