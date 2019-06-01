import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.div`
  position: fixed;
  top: 19%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  box-shadow: 0px 4px 9px 0px rgba(34, 47, 66, 0.1);
`;

export const TabsWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.paleLavender};
  overflow: hidden;
`;
export const Tab = styled.div`
  width: 50%;
  padding: 25px 10px 21px;
  float: left;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  &.active {
    cursor: auto;
    color: ${props => props.theme.color.purpleishBlue};
  }
  &.active:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: ${({ theme }) => theme.color.purpleishBlue};
  }
`;

export const Container = styled.div`
  padding: 65px 40px 35px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ButtonClass = css`
  width: 100%;
`;
