import React from 'react';
import LeftMenu from '../LeftMenu';

import { Wrapper, ContentWrapper } from './MainWrapper.style';

const MainWrapper = props => {
  return (
    <Wrapper>
      <LeftMenu />
      <ContentWrapper>{props.children}</ContentWrapper>
    </Wrapper>
  );
};

export default MainWrapper;
