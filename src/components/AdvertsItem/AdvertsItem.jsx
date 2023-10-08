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

const AdvertsItem = ({ item, children, ...props }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const address = getAdress(item.address);

  const handleIsFavorite = () => {
   setIsFavorite(!isFavorite)
 } 
  return (
    <AdvertItem>
      {isFavorite ? (
        <IsFavoriteIcon onClick={handleIsFavorite} />
      ) : (
        <IsNotFavoriteIcon onClick={handleIsFavorite} />
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
      <SubmitBtn type="button">Learn more</SubmitBtn>
    </AdvertItem>
  );
};

export default AdvertsItem;
