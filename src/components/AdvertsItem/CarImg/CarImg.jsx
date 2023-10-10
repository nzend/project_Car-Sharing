import { useEffect, useState } from 'react';
import { CarImg, LoaderBox } from './CarImg.styled';
import NoImage from '../../../assets/images/No_image.jpg';
import Loader from 'components/Loader/Loader';

const AdvertCarImg = ({ item, width, height }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(true);
  };

  const handleImageError = () => {
    setImageLoading(true);
    setImageError(true);
  };

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = item.img;
    imgElement.onload = handleImageLoad;
    imgElement.onerror = handleImageError;
  }, [item.img]);

  return (
    <>
      {!imageLoading ? (
        <LoaderBox style={{ width: `${width}px`, height: `${height}px` }}>
          <Loader loader={'dots'} />
        </LoaderBox>
      ) : (
        <>
          {!imageError ? (
            <CarImg
              src={item.img}
              alt={item.make}
              style={{ width: `${width}px`, height: `${height}px` }}
            />
          ) : (
            <CarImg
              src={NoImage}
              alt={item.make}
              style={{ width: `${width}px`, height: `${height}px` }}
            />
          )}
        </>
      )}
    </>
  );
};

export default AdvertCarImg;
