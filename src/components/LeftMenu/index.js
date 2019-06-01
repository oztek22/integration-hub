/** @jsx jsx */

// import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTheme } from 'emotion-theming';
import { jsx } from '@emotion/core';
import Icon from 'components/Icons';

import { Wrapper, link } from './LeftMenu.style';

const LeftMenu = props => {
  return (
    <Wrapper>
      <NavLink
        css={link(props.theme)}
        to="/connections"
        activeClassName="selected"
      >
        <Icon type="connection" /> <span>Connections</span>
      </NavLink>
      <NavLink
        css={link(props.theme)}
        to="/mapping-profile"
        activeClassName="selected"
      >
        <Icon type="mapping" /> <span>Mapping Profile</span>
      </NavLink>
      <NavLink css={link(props.theme)} to="/jobs" activeClassName="selected">
        <Icon type="breifcase" /> <span>Jobs</span>
      </NavLink>
    </Wrapper>
  );
};

export default withTheme(LeftMenu);
