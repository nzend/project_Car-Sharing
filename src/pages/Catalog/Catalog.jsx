import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import AdvertsWrapper from 'components/AdvertsWrapper/AdvertsWrapper';
import FilterBar from 'components/FilterBar/FilterBar';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getAdverts } from '../../redux/adverts/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  let adverts = useSelector(selectAdverts);
  return (
    <>
      <FilterBar />
      <AdvertsWrapper items={adverts} />
    </>
  );
};

export default Catalog;
