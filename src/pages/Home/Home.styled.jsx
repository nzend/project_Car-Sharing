import styled from '@emotion/styled';
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.8),
      rgba(20, 20, 20, 1)
    ),
    url(' https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/land_rover_range_rover_sport.jpg');
`;

export const HeroTitle = styled.h1`
  color: #db3138;
  text-align: center;
  font-size: 75px;

  font-weight: 700;
`;

export const HeroDescription = styled.p`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 40px;

  font-weight: 500;
  line-height: 1.2;
`;
export const ToCatalogLink = styled.div`
  border-radius: 12px;
  background: rgba(138, 138, 137, 0.2);
  padding: 12px 50px;
`;
