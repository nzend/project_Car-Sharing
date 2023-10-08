import {
  ModelAccent,
  CarImg,
  InfoList,
  InfoItem,
  CarTitle,
  CarDiscription,
  SubmitBtn,
  IsFavoriteIcon,
  AdvertItem,
  IsNotFavoriteIcon,
} from './AdvertsItem.styled';
import { getAdress } from '../../utils/getAdress';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { addFavoritesId, removeFavoritesId } from '../../redux/favorites/slice';



const AdvertsItem = ({ item, isFavorite }) => {
  const dispatch = useDispatch();
  console.log("isFAV", isFavorite);
  const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const address = getAdress(item.address);

  const handleIsFavorite = (itemId) => {
    console.log(itemId);
    console.log(isFavorite);
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
    console.log('Open modal');
    setIsModalOpen(!isModalOpen);
  };
  return (
    <AdvertItem>
      {isFavoriteItem ? (
        <IsFavoriteIcon onClick={() => handleIsFavorite(item.id)} />
      ) : (
        <IsNotFavoriteIcon onClick={() => handleIsFavorite(item.id)} />
      )}

      <CarImg src={item.img} alt={item.make} />
      <CarDiscription>
        <CarTitle>
          <span>
            {item.make} <ModelAccent>{item.model}</ModelAccent>, {item.year}
          </span>
          <span>{item.rentalPrice}</span>
        </CarTitle>
        <InfoList>
          <InfoItem>{address?.city}</InfoItem>
          <InfoItem>{address?.country}</InfoItem>
          <InfoItem>{item.rentalCompany}</InfoItem>
          <InfoItem>{item.type}</InfoItem>
          <InfoItem>{item.model}</InfoItem>
          <InfoItem>{item.id}</InfoItem>
          <InfoItem>{item.functionalities?.[0]}</InfoItem>
        </InfoList>
      </CarDiscription>
      <SubmitBtn type="button" onClick={handleOpenModal}>
        Learn more
      </SubmitBtn>
      {isModalOpen && <Modal openModal={handleOpenModal}></Modal>}
    </AdvertItem>
  );
};

export default AdvertsItem;
