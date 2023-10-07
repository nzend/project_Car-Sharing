import { Container, SideBar } from './AppBar.styled';
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
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default AppBar;
