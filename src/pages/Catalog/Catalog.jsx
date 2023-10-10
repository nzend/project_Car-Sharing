import { Container } from './Catalog.styled';
import AdvertsWrapper from 'components/AdvertsWrapper/AdvertsWrapper';
import FilterBar from 'components/FilterBar/FilterBar';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAdverts } from '../../redux/adverts/operations';
import { changePage } from '../../redux/adverts/slice';
import { resetStatusFilter } from '../../redux/filters/slice';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
    dispatch(changePage(1));
    dispatch(resetStatusFilter());
  }, [dispatch]);

  let adverts = useSelector(selectAdverts);
  return (
    <Container>
      <FilterBar />
      <AdvertsWrapper items={adverts} />
    </Container>
  );
};

export default Catalog;
