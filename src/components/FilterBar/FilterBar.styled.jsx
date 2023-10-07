import styled from '@emotion/styled';

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const FilterLabel = styled.label`
  color: #8a8a89;

  font-size: 14px;

  font-weight: 500;
  line-height: 1.28;
`;

export const SubmitBtn = styled.button`
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
`;

export const InputMilageWrapper = styled.div`
  display: flex;
`;

export const InputMilageMin = styled.input`
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  width: 160px;

  padding: 14px 93px 14px 24px;
`;
export const InputMilageMax = styled.input`
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  width: 160px;

  padding: 14px 115px 14px 24px;
`;
