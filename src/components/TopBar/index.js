/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import { Avatar, Icon, Dropdown, Menu } from 'antd';

import {
  Wrapper,
  TitleWrapper,
  InnerWrapper,
  UserMenuWrapper,
  avatarClass,
  ContentWrapper,
} from './style';

const dropdownOverlay = () => (
  <Menu>
    <Menu.Item key={0}>
      <a href="/login">Logout</a>
    </Menu.Item>
  </Menu>
);

const TopBar = () => {
  const [userMenuOpen, menuOpenChange] = useState(false);

  const vc = visible => {
    // console.log('visible: ', visible);
  };
  // console.log('userMenuOpen');
  return (
    <Wrapper>
      <InnerWrapper>
        <ContentWrapper>
          <TitleWrapper className="font-avenir-med">
            Integration Hub
          </TitleWrapper>
          {!window.location.href.includes('/login') && (
            <UserMenuWrapper onClick={() => menuOpenChange(!userMenuOpen)}>
              <Dropdown
                overlay={dropdownOverlay}
                visible={userMenuOpen}
                onVisibleChange={vc}
                trigger={['click']}
              >
                <>
                  <Avatar
                    css={avatarClass}
                    src="https://randomuser.me/api/portraits/men/33.jpg"
                  />
                  <Icon type={userMenuOpen ? 'up' : 'down'} />
                </>
              </Dropdown>
            </UserMenuWrapper>
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
