import React from 'react';
import styled from '@emotion/styled';

const PillItem = styled.div`
  border: 1px solid ${props => props.theme.color.lightBlueGrey};
  border-radius: 24px;
  font-size: 14px;
  font-family: 'Avenir Book', sans-serif;
  color: ${props => props.theme.color.black1};
  margin: 0px 8px 7px 0px;
  padding: 4px 16px;
  cursor: pointer;
  ${({ selected, theme }) => `
    ${selected &&
      `
      background: ${theme.color.purpleishBlue};
      border-color: ${theme.color.purpleishBlue};
      color: #fff;
    `}
  `}
`;

const Pill = ({ text, selected }) => {
  return <PillItem selected={selected}>{text}</PillItem>;
};

export default Pill;
