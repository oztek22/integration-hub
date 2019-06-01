import styled from '@emotion/styled';

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px;
`;

export const ColumnBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px;
`;

export const Column = styled.div`
  ${({ side }) => `
    width: 50%;
    padding: ${side === 'left' ? '0px 40px 0px 0px' : '0px 0px 0px 40px'};
  `}
`;
export const Item = styled.div`
  margin-bottom: 42px;
`;

export const ModalTitle = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

export const SectionTitle = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #222f42;
  margin-bottom: 16px;
`;
