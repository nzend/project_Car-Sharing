import css from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {

 
  return (
    <div className={css.container}>
      <aside className={css.header}>
        <Navigation></Navigation>
        
      </aside>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AppBar;