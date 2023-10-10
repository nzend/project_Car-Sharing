import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const CarTitle = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${colors.textBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 8px;
`;

export const ModelAccent = styled.span`
  color: ${colors.accentColor};
`;
