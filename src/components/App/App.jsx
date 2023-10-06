import { Route, Routes } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';





const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        
        <Route
          path="/catalog"
          element={<Catalog/>}
        />
        <Route
          path="/favorites"
          element={<div>Hello-3</div>}
        />
      </Route>
    </Routes>
  )
    
  
};


export default App;
