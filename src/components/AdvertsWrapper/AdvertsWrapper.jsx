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

const AdvertsWrapper = ({ items }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  let page = useSelector(selectPage);
  console.log(page);
  console.log('FILTERS', filters);

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
          return <AdvertsItem key={item.id} item={item} />;
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
