import AdvertsWrapper from 'components/AdvertsWrapper/AdvertsWrapper';
import FilterBar from 'components/FilterBar/FilterBar';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { selectFavoritesId } from '../../redux/favorites/selectors';
import { getAdverts } from '../../redux/adverts/operations';
import { changePage } from '../../redux/adverts/slice';

const Favorites = () => {
  const favoritesIds = useSelector(selectFavoritesId);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
    dispatch(changePage(1));
  }, [dispatch]);

  let FavoritesCards = adverts.filter(item => {
    return favoritesIds.includes(item.id);
  });
  return (
    <>
      <FilterBar />
      <AdvertsWrapper items={FavoritesCards} />
    </>
  );
};

export default Favorites;
