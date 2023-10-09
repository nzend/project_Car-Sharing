import { ModelAccent, CarTitle } from './CarTitle.styled';

const AdvertCarTitle = ({ item, isModal }) => {
  return (
    <CarTitle>
      <span>
        {item.make} <ModelAccent>{item.model}</ModelAccent>, {item.year}
      </span>
      {!isModal && <span>{item.rentalPrice}</span>}
    </CarTitle>
  );
};

export default AdvertCarTitle;
