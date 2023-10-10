import styled from '@emotion/styled';
import heroImg from '../../assets/images/land_rover_range_rover_sport.jpg';
import colors from 'utils/colorVeriables';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.mainWhite};
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.8),
      rgba(20, 20, 20, 1)
    ),
    url(${heroImg});
`;

export const HeroTitle = styled.h1`
  color: ${colors.accentRedColor};
  text-align: center;
  font-size: 75px;

  font-weight: 700;
`;

export const HeroDescription = styled.p`
  color: ${colors.textWhite};
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
