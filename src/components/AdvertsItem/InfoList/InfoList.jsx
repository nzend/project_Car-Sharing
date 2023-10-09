import { InfoList, InfoItem } from './InfoList.styled';
import { getAdress } from '../../../utils/getAdress';

const AdvertCarInfoList = ({ item, isModal }) => {
  const address = getAdress(item.address);
  return (
    <InfoList isModal={isModal}>
      <InfoItem>{address?.city}</InfoItem>
      <InfoItem>{address?.country}</InfoItem>
      {isModal ? (
        <>
          <InfoItem>Id: {item.id}</InfoItem>
          <InfoItem>Year: {item.year}</InfoItem>
          <InfoItem>Type: {item.type}</InfoItem>
          <InfoItem>Fuel Consumption: {item.fuelConsumption}</InfoItem>
          <InfoItem>Engine Size: {item.engineSize}</InfoItem>
        </>
      ) : (
        <>
          <InfoItem>{item.rentalCompany}</InfoItem>
          <InfoItem>{item.type}</InfoItem>
          <InfoItem>{item.model}</InfoItem>
          <InfoItem>{item.id}</InfoItem>
          <InfoItem>{item.functionalities?.[0]}</InfoItem>
        </>
      )}
    </InfoList>
  );
};

export default AdvertCarInfoList;
