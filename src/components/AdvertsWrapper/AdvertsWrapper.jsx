import React, { useState, useEffect } from 'react';
import {
  AdvertsList,
  LoadMoreBtn,
  AdvertsContainer,
} from './AdvertsWrapper.styled';
import AdvertsItem from 'components/AdvertsItem/AdvertsItem';
import { pagination } from 'utils/pagination';
import { selectFilter } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'redux/adverts/slice';
import { selectPage } from '../../redux/adverts/selectors';
import { filtering } from '../../utils/advertsFilter';
import { selectFavoritesId } from 'redux/favorites/selectors';

const AdvertsWrapper = ({ items }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavoritesId);
  console.log(favorites);
  const hangleIsFavorite = itemId => {
    console.log(favorites.includes(itemId));
   return favorites.includes(itemId);
  };

  const filters = useSelector(selectFilter);
  let page = useSelector(selectPage);

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    let filteredCards = filtering(items, filters);
    let newCards = pagination(filteredCards, page);

    setVisibleCards(newCards);
    console.log('filteredCards', filteredCards);
  }, [page, items, filters]);

  return (
    <AdvertsContainer>
      <AdvertsList>
        {visibleCards.map(item => {
          return (
            <AdvertsItem
              key={item.id}
              item={item}
              isFavorite={hangleIsFavorite(item.id)}
            />
          );
        })}
      </AdvertsList>

      {visibleCards.length < filtering(items, filters).length && (
        <LoadMoreBtn onClick={() => dispatch(changePage(page + 1))}>
          Load more
        </LoadMoreBtn>
      )}
    </AdvertsContainer>
  );
};

export default AdvertsWrapper;
