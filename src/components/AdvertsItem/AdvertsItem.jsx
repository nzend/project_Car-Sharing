import { Advert, CarImg, CarTitle } from './AdvertsItem.styled';


const AdvertsItem = ({ item, children, ...props }) => {
  return (
    <Advert>
      <CarImg src={item.img} alt="" />
      <CarTitle>
        <span>
          {item.make}, {item.year}
        </span>
              <span>{item.rentalPrice}</span>
              <ul>
                 
              </ul>
      </CarTitle>
    </Advert>
  );
};

export default AdvertsItem;
