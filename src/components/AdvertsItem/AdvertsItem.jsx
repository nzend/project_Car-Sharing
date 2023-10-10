import {
  CarDiscription,
  CarMainInfo,
  SubmitBtn,
  IsFavoriteIcon,
  AdvertItem,
  IsNotFavoriteIcon,
  CarConfigTitle,
  RentalConditionsList,
  RentalConditionsItem,
  DataAccent,
  RentalBtn,
} from './AdvertsItem.styled';
import { InfoItem, InfoList } from './InfoList/InfoList.styled';
import { nanoid } from 'nanoid';

import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { addFavoritesId, removeFavoritesId } from '../../redux/favorites/slice';
import AdvertCarTitle from './CarTitle/CarTitle';
import AdvertCarInfoList from './InfoList/InfoList';
import AdvertCarImg from './CarImg/CarImg';
import { splitStringIntoTextAndNumber } from '../../utils/splitString';

const AdvertsItem = ({ item, isFavorite }) => {
  const dispatch = useDispatch();
  const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsFavorite = itemId => {
    if (isFavoriteItem) {
      dispatch(removeFavoritesId(itemId));
      setIsFavoriteItem(!isFavoriteItem);
      return;
    } else {
      dispatch(addFavoritesId(itemId));
      setIsFavoriteItem(!isFavoriteItem);
      return;
    }
  };

  const handleOpenModal = () => {
    const body = document.querySelector('body');
    body.classList.toggle('modal-open');
    setIsModalOpen(!isModalOpen);
  };
  const rentalConditionsArray = item.rentalConditions.split('\n');
  return (
    <AdvertItem>
      {isFavoriteItem ? (
        <IsFavoriteIcon onClick={() => handleIsFavorite(item.id)} />
      ) : (
        <IsNotFavoriteIcon onClick={() => handleIsFavorite(item.id)} />
      )}
      <AdvertCarImg item={item} width={274}  />

      <CarMainInfo>
        <AdvertCarTitle item={item} isModal={false} />
        <AdvertCarInfoList item={item} />
      </CarMainInfo>
      <SubmitBtn type="button" onClick={handleOpenModal}>
        Learn more
      </SubmitBtn>
      {isModalOpen && (
        <Modal openModal={handleOpenModal} width={541} height={752}>
          <AdvertCarImg item={item} width={461}  />
          <CarMainInfo>
            <AdvertCarTitle item={item} isModal={true} />
            <AdvertCarInfoList item={item} isModal={true} />
          </CarMainInfo>
          <CarDiscription>{item.description}</CarDiscription>
          <CarConfigTitle>Accessories and functionalities:</CarConfigTitle>
          <InfoList>
            {item.accessories.map(item => {
              return <InfoItem key={nanoid()}>{item}</InfoItem>;
            })}
            {item.functionalities.map(item => {
              return <InfoItem key={nanoid()}>{item}</InfoItem>;
            })}
          </InfoList>
          <CarConfigTitle>Rental Conditions: </CarConfigTitle>
          <RentalConditionsList>
            {rentalConditionsArray.map(item => {
              const data = splitStringIntoTextAndNumber(item);

              return (
                <RentalConditionsItem key={nanoid()}>
                  {data.text}
                  {data.number && <DataAccent> {data.number}</DataAccent>}
                </RentalConditionsItem>
              );
            })}
            <RentalConditionsItem>
              Mileage: <DataAccent> {item.mileage.toLocaleString()}</DataAccent>
            </RentalConditionsItem>
            <RentalConditionsItem>
              Price: <DataAccent> {item.rentalPrice}</DataAccent>
            </RentalConditionsItem>
          </RentalConditionsList>
          <RentalBtn href="tel:+380 96 9261128">Rental Car</RentalBtn>
        </Modal>
      )}
    </AdvertItem>
  );
};

export default AdvertsItem;
