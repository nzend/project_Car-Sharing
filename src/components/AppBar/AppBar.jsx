import css from './AppBar.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';


const AppBar = () => {
  return (
    <div className={css.container}>
      <aside className={css.header}>
        <Navigation/> 
      </aside>
      <main>
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        </div>
      </main>
    </div>
  );
};

export default AppBar;