import { Hero, ToCatalogLink } from '../Home/Home.styled';
import { Title, Text } from './ErrorPage.styled';
import { NavigationLink } from '../../components/Navigation/Navigation.styled';

const ErrorPage = () => {
  return (
    <Hero>
      <Title>404</Title>
      <Text>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </Text>
      <NavigationLink to={'/'}>
        <ToCatalogLink>To Home</ToCatalogLink>
      </NavigationLink>
    </Hero>
  );
};

export default ErrorPage;
