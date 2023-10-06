import { Container, Header, MainContainer } from './AppBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <main>
        <MainContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
    </Container>
  );
};

export default AppBar;
