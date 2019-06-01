/** @jsx jsx */
import React from 'react';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { jsx } from '@emotion/core';
import { withRouter } from 'react-router-dom';

import FloatingLabel from 'components/FloatingLabelInput';

import {
  Wrapper,
  TabsWrapper,
  Tab,
  Container,
  InputWrapper,
  ButtonClass,
} from './login.style';

const onLoginDataChange = (loginData, setLoginData, key) => e => {
  setLoginData({ ...loginData, [key]: e.target.value });
};

const Login = ({ history }) => {
  window.setTitle && window.setTitle('Integration Hub');
  const [active, setActive] = useState(1);
  const [loginData, setLoginData] = useState({ userName: '', password: '' });

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      history.push('/');
    }
  };

  return (
    <Wrapper>
      <TabsWrapper>
        <Tab className={active === 1 && 'active'} onClick={() => setActive(1)}>
          LOGIN
        </Tab>
        <Tab className={active === 2 && 'active'} onClick={() => setActive(2)}>
          SIGNUP
        </Tab>
      </TabsWrapper>
      <Container>
        {active === 1 && (
          <>
            <InputWrapper>
              <FloatingLabel
                value={loginData.userName}
                placeholder="Username / Email"
                onChange={onLoginDataChange(
                  loginData,
                  setLoginData,
                  'userName'
                )}
                onKeyUp={handleKeyUp}
              />
            </InputWrapper>
            <InputWrapper>
              <FloatingLabel
                value={loginData.password}
                type="password"
                placeholder="Password"
                onChange={onLoginDataChange(
                  loginData,
                  setLoginData,
                  'password'
                )}
                onKeyUp={handleKeyUp}
              />
            </InputWrapper>
            <Button
              disabled={!loginData.userName || !loginData.password}
              css={ButtonClass}
              type="primary"
              onClick={() => history.push('/')}
            >
              Login
            </Button>
          </>
        )}
        {active === 2 && (
          <>
            <InputWrapper>
              <FloatingLabel placeholder="Email" />
            </InputWrapper>
            <InputWrapper>
              <FloatingLabel type="password" placeholder="Password" />
            </InputWrapper>
            <InputWrapper>
              <FloatingLabel type="password" placeholder="Confirm Password" />
            </InputWrapper>
            <Button disabled css={ButtonClass} type="primary">
              Register
            </Button>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default withRouter(Login);
