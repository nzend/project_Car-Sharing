import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/adverts/slice';
import { useEffect } from 'react';
import { Hero, HeroTitle, HeroDescription, ToCatalogLink } from './Home.styled';
import { NavigationLink } from '../../components/Navigation/Navigation.styled';
import { resetStatusFilter } from '../../redux/filters/slice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(1));
    dispatch(resetStatusFilter());
  }, [dispatch]);
  return (
    <Hero>
      <HeroTitle>Leading Car Rental Service in Ukraine</HeroTitle>
      <HeroDescription>
        Explore Ukraine with Confidence - Your Trusted Car Rental Partner
      </HeroDescription>
      <NavigationLink to={'/catalog'}>
        <ToCatalogLink>To Catalog</ToCatalogLink>
      </NavigationLink>
    </Hero>
  );
};

export default Home;
