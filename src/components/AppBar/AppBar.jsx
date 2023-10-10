import { Container, SideBar } from './AppBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';
const AppBar = () => {
  return (
    <>
      <SideBar>
        <Navigation />
      </SideBar>

      <Container>
        <Suspense fallback={<Loader size={'100'} needToCenter />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default AppBar;
