import { AdvertsList } from './AdvertsWrapper.styled';

const AdvertsWrapper = ({ items, children, ...props }) => {
  return (
    <>
      <AdvertsList items={items} {...props}>
        {children}
      </AdvertsList>
    </>
  );
};

export default AdvertsWrapper;
