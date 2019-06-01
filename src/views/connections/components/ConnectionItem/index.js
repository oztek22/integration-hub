import React from 'react';
import { Icon } from 'antd';
import { observer } from 'mobx-react-lite';

import { theme } from 'style/theme';

import {
  Wrapper,
  Item,
  Title,
  Label,
  BaseUrl,
  EditIcon,
} from './connectionItem.style';

const ConnectionItem = observer(({ title, baseUrl, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Item>
        <Title className="font-avenir-roman">{title}</Title>
      </Item>
      <Item>
        <Label className="font-avenir-med">BASE URL:</Label>
        <BaseUrl className="font-avenir-book">
          <a href={baseUrl}>{baseUrl}</a>
        </BaseUrl>
      </Item>
      <EditIcon>
        <Icon
          type="edit"
          theme="filled"
          style={{ color: theme.color.purpleishBlue, fontSize: '20px' }}
        />
      </EditIcon>
    </Wrapper>
  );
});

export default ConnectionItem;
