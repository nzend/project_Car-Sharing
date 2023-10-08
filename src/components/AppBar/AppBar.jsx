import { Container, SideBar, Main } from './AppBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <>
      <SideBar>
        <Navigation />
      </SideBar>

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default AppBar;
