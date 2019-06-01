import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const TitleWrapper = styled.div`
  float: left;
`;

export const ButtonWrapper = styled.div`
  float: right;
  margin-top: 10px;
`;

export const ListingWrapper = styled.div`
  clear: both;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Button = styled.button`
  margin-right: 10px;
`;

export const BlocksColumn = styled.div`
  width: 40%;
  margin-right: 30px;
`;
export const ArrowColumn = styled.div`
  width: 20%;
`;

export const Arrow = styled.div`
  ${props => `
    ${props.index === 0 ? 'margin: 60px 0px 144px;' : 'margin: 0px 0px 144px;'}
  `}
  position: relative;
  width: 100%;
  background: ${props => props.theme.color.blueyGrey};
  height: 1px;

  &:before {
    position: absolute;
    top: -3px;
    left: -1px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3.5px 10px 3.5px 0;
    border-color: transparent ${props => props.theme.color.blueyGrey}
      transparent transparent;
    transform: rotate(360deg);
  }
  &:after {
    position: absolute;
    top: -3px;
    right: -2px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3.5px 0px 3.5px 10px;
    border-color: transparent transparent transparent
      ${props => props.theme.color.blueyGrey};
  }
`;
