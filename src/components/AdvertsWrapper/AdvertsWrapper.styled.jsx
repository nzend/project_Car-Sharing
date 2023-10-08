import styled from '@emotion/styled';

export const AdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;

  padding: 0 32px;
  margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const AdvertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
