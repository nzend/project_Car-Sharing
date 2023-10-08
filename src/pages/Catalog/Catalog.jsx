import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import AdvertsWrapper from 'components/AdvertsWrapper/AdvertsWrapper';
import FilterBar from 'components/FilterBar/FilterBar';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector, useDispatch } from 'react-redux';

const Catalog = () => {
    let adverts = useSelector(selectAdverts);
  return (
    <>
      <FilterBar />
      <AdvertsWrapper>
        {adverts.map(item => {
          return <AdvertsItem key={item.id} item={item} />;
        })}
        
        
      </AdvertsWrapper>
    </>
  );
};

export default Catalog;
