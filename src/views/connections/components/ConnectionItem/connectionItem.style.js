import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.paleBlue};
  border-radius: 4px;
  padding: 18px 24px 10px;
  margin-bottom: 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: norap;

  & svg {
    display: none;
  }
  &:hover {
    background: ${({ theme }) => theme.color.paleGrey};
    border-color: ${({ theme }) => theme.color.paleGrey};
  }
  &:hover svg {
    display: inline;
  }
`;
export const Item = styled.div`
  margin-bottom: 9px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 16px;
  color: ${props => props.theme.color.darkGrey};
`;
export const Label = styled.div`
  font-size: 12px;
  margin-right: 8px;
  color: ${props => props.theme.color.blueyGrey};
`;
export const BaseUrl = styled.div`
  & a {
    font-size: 12px;
    color: ${props => props.theme.color.blueyGrey};
    text-decoration: underline;
  }
`;
export const PortNo = styled.div`
  font-size: 12px;
  color: ${props => props.theme.color.blueyGrey};
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
