import AdvertsWrapper from 'components/AdvertsWrapper/AdvertsWrapper';
import FilterBar from 'components/FilterBar/FilterBar';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { selectFavoritesId } from '../../redux/favorites/selectors';
import { getAdverts } from '../../redux/adverts/operations';
import { changePage } from '../../redux/adverts/slice';
import { Container } from '../Catalog/Catalog.styled';
import { resetStatusFilter } from '../../redux/filters/slice';
import NotFound from 'components/NotFound/NotFound';

const Favorites = () => {
  const favoritesIds = useSelector(selectFavoritesId);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts());
    dispatch(changePage(1));
    dispatch(resetStatusFilter());
  }, [dispatch]);

  let favoriteCards = adverts.filter(item => {
    return favoritesIds.includes(item.id);
  });
  return (
    <Container>
      <FilterBar />
      {favoriteCards.length < 1 ? (
        <NotFound>You haven't added anything to your favorites yet</NotFound>
      ) : (
        <AdvertsWrapper items={favoriteCards} />
      )}
    </Container>
  );
};

export default Favorites;
