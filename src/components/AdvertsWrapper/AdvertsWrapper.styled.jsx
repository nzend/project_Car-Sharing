import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const AdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 50px;

  padding: 0 32px;
  margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
  text-align: center;
  color: ${colors.btnColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: ${colors.btnHoverColor};
  }
`;

export const AdvertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
