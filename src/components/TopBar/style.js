import styled from '@emotion/styled';
import css from '@emotion/css';

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 72px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const InnerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 0px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-left: 260px;
  max-width: 1009px;
  padding: 0px 20px 0px 0px;
`;

export const UserMenuWrapper = styled.div`
  float: right;
  cursor: pointer;
`;

export const TitleWrapper = styled.span`
  ${({ theme }) => `
    color: ${theme.color.slateGrey};
    font-size: 22px;
    float: left;
  `}
`;

export const avatarClass = css`
  margin-right: 10px;
`;
