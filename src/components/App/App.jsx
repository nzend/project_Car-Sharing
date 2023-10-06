import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Home from 'pages/Home/Home';





const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        
        <Route
          path="/catalog"
          element={<div>Hello-2</div>}
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
