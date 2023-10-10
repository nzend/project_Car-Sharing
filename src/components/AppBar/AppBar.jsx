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

      <div>
        <Suspense
          fallback={<Loader size={'100'} loader={'pruff'} needToCenter />}
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default AppBar;
