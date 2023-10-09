import { CarImg } from './CarImg.styled';

const AdvertCarImg = ({ item, width }) => {
  return <CarImg src={item.img} alt={item.make} width={width} />;
};

export default AdvertCarImg;
