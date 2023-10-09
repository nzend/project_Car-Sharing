import styled from '@emotion/styled';

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 40px;

  width: ${props => (props.isModal ? 380 + 'px' : '100%')};
  margin-bottom: ${props => (props.isModal ? 14 + 'px' : '28px')};
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;
export const InfoItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -6px;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;
