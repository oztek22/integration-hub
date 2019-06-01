import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.div``;
export const TitleWrapper = styled.div`
  float: left;
  margin: 0px 0px 24px;
  display: flex;
  align-items: center;
`;

export const CountersWrapper = styled.div`
  clear: both;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Counter = styled.div`
  ${props => (props.noClick ? '' : 'cursor: pointer')};
  margin: 0px 80px 0px 0px;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const labelDot = size => css`
  border-radius: 50%;
  height: 12px;
  width: 12px;
  ${size === 'large' &&
    `
    height: 16px;
    width: 16px;
  `}
  margin-right: 8px;
  float: left;
`;

export const ScheduledDot = styled.div`
  ${labelDot('')}
  background: ${props => props.theme.color.purpleishBlue};
`;

export const CompletedDot = styled.div`
  ${props => labelDot(props.size)};
  background: ${props => props.theme.color.mediumGreen};
`;

export const ErroredDot = styled.div`
  ${props => labelDot(props.size)};
  background: ${props => props.theme.color.red};
`;

export const CounterLabel = styled.div`
  font-family: 'Avenir Heavy', sans-sarif;
  font-weight: 900;
  text-transform: uppercase;
  color: ${props => props.theme.color.blueyGrey};
`;

export const CounterCount = styled.div`
  font-size: 28px;
  font-family: 'Avenir Medium', sans-sarif;
  font-weight: 500;
  color: ${props => props.theme.color.slateGrey};
`;

export const JobsListWrapper = styled.div`
  padding: 60px 0px 0px 0px;
`;

export const JobsList = styled.div`
  box-shadow: 0px 4px 13px 0px rgba(34, 47, 66, 0.16);
  padding: 0px 0px 20px 0px;
  clear: both;
`;

export const ButtonWrapper = styled.div`
  float: right;
`;

export const FilterButtonWrapper = styled.div`
  float: left;
  margin-left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.color.purpleishBlue};
  font-family: Poppins, sans-serif;
`;

export const IconWrapper = styled.div`
  background-color: ${props => props.theme.color.paleLavender};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0px 3px;
  margin-right: 8px;
`;
