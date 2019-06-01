import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.div`
  width: 260px;
  float: left;
  padding: 0px 38px;
`;

export const link = ({ color }) => css`
  display: block;
  font-size: 14px;
  color: ${color.slateGrey};
  padding: 7px 21px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-family: 'Avenir Roman', sans-serif;
  & span {
    margin-left: 19px;
  }
  &.selected {
    color: ${color.purpleishBlue};
    background-color: ${color.paleGrey};
  }

  & svg {
    fill: ${color.slateGrey};
    stroke: ${color.slateGrey};
  }

  &:hover svg,
  &.selected svg {
    fill: ${color.purpleishBlue};
    stroke: ${color.purpleishBlue};
  }
`;
