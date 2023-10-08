import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/adverts/slice';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(1));
  }, [dispatch]);
  return (
    <div>
      <p>
        Hello world. This is my educational project in which I practice
        component React development with state saving in Redax. Routing with
        private and public routes. With user registration and authorization.
        <br />
        Enjoy.
      </p>
    </div>
  );
};

export default Home;
