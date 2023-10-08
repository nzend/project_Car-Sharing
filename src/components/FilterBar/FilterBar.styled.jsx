import styled from '@emotion/styled';

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`;

export const FilterLabel = styled.label`
  color: #8a8a89;

  font-size: 14px;

  font-weight: 500;
  line-height: 1.28;
  margin-bottom: 8px;
`;

export const SubmitBtn = styled.button`
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const InputMilageWrapper = styled.div`
  display: flex;
`;
