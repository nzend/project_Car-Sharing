import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import AppBar from 'components/AppBar/AppBar';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
// const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<div>Hello-3</div>} />
      </Route>
    </Routes>
  );
};

export default App;
