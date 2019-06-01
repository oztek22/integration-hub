import styled from '@emotion/styled';
import React from 'react';
import { Dropdown, Menu, Icon, Popover, Button, Tooltip } from 'antd';
import { Observer } from 'mobx-react';
import cloneDeep from 'lodash/cloneDeep';

import { theme } from 'style/theme';

import { InputLabel } from 'components/Style/InputLabel';

const ButtonGroup = Button.Group;

const MappingDataItem = styled.span`
  ${({ first, last, theme }) => `
    padding: 3px;
    position: relative;
    margin-right: 25px;
    padding: 7px 5px 7px 10px;
    ${
      first || last
        ? `
      padding: 7px 10px;
      background: ${theme.color.paleGrey}
    `
        : ``
    };
    ${
      last
        ? `
        margin-left: 10px;

      & span.arrow {
        display: none;
      }
    `
        : ``
    }
  `}
`;

const Arrow = styled.span`
  position: absolute;
  right: -25px;
  height: 1px;
  width: 20px;
  top: 16px;
  background: ${props => props.theme.color.blueyGrey};
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

const Clickable = styled.span`
  cursor: pointer;
`;

const MenuItem = styled.span`
  font-family: 'Avenir Book', sans-serif;
  font-size: 14px;
  color: ${theme.color.black1};
  padding: 0px 25px 0px 0px;

  & span {
    margin-left: 13px;
  }
`;

const columns = (
  onMappingEdit,
  removeMappingProfile,
  removeMappingTransformer
) => [
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'SOURCE',
    dataIndex: 'source',
    render: (text, record) => record.source.name,
  },
  {
    title: 'DESTINATION',
    dataIndex: 'destination',
    render: (text, record) => record.destination.name,
  },
  {
    title: 'MAPPING PROFILE',
    dataIndex: 'mappingProfile',
    render: () => <a>View/Edit</a>,
  },
  {
    title: 'ACTION',
    // dataIndex: 'scheduledTime',
    key: 'action',
    render: (text, record) => (
      <div onClick={e => e.stopPropagation()}>
        <Dropdown
          overlay={() => {
            return (
              <Menu style={{ padding: '6px 0px' }}>
                <Menu.Item onClick={() => onMappingEdit(record)}>
                  <MenuItem>
                    <Icon
                      type="edit"
                      theme="filled"
                      style={{ color: theme.color.black1, opacity: '0.6' }}
                    />
                    <span>Edit</span>
                  </MenuItem>
                </Menu.Item>
                <Menu.Item onClick={() => removeMappingProfile(record.id)}>
                  <MenuItem>
                    <Icon
                      type="delete"
                      theme="filled"
                      style={{ color: theme.color.black1, opacity: '0.6' }}
                    />
                    <span>Delete</span>
                  </MenuItem>
                </Menu.Item>
              </Menu>
            );
          }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Icon type="dash" />
        </Dropdown>
      </div>
    ),
  },
];

const formulaEditMenu = (
  record,
  second,
  secondLast,
  data,
  editMappingFormulaChange,
  removeMappingTransformer
) => {
  return (
    <Menu>
      <ButtonGroup>
        {!second && (
          <Button>
            <Icon type="left" />
          </Button>
        )}
        <Button
          type="primary"
          onClick={() =>
            editMappingFormulaChange({ profileId: record.id, ...data })
          }
        >
          Edit
        </Button>
        <Button onClick={() => removeMappingTransformer(data.id)}>
          Remove
        </Button>
        {!secondLast && (
          <Button>
            <Icon type="right" />
          </Button>
        )}
      </ButtonGroup>
    </Menu>
  );
};

const mappingProfileRow = (
  editMappingFormulaChange,
  removeMappingTransformer
) => record => {
  console.log('mappingProfileRow render:: ');
  const mappingData = cloneDeep(record.transformationData);
  mappingData.splice(mappingData.length - 1, 0, { create: true });

  const removeTransformer = profileId => transformerId =>
    removeMappingTransformer(profileId, transformerId);

  return (
    <Observer>
      {() => (
        <div>
          <InputLabel style={{ marginBottom: '20px' }}>Mapping</InputLabel>
          {mappingData.map((data, index) => {
            const first = index === 0;
            const last = index + 1 === mappingData.length;
            return (
              <>
                {data.create ? (
                  <>
                    <Tooltip placement="bottom" title="Add a Transformer">
                      <Button
                        onClick={() =>
                          editMappingFormulaChange({
                            create: true,
                            profileId: record.id,
                          })
                        }
                        style={{ marginLeft: '10px' }}
                      >
                        <Icon type="plus" />
                      </Button>
                      {/* <Arrow className="arrow" /> */}
                    </Tooltip>
                  </>
                ) : (
                  <MappingDataItem first={first} last={last}>
                    {first || last ? (
                      data
                    ) : (
                      <Popover
                        placement="bottom"
                        title={undefined}
                        content={formulaEditMenu(
                          record,
                          index === 1,
                          index + 3 === mappingData.length,
                          data,
                          editMappingFormulaChange,
                          removeTransformer(record.id)
                        )}
                        trigger="click"
                      >
                        <Clickable>{data.name || data}</Clickable>
                      </Popover>
                    )}
                    <Arrow className="arrow" />
                  </MappingDataItem>
                )}
              </>
            );
          })}
        </div>
      )}
    </Observer>
  );
};

export { mappingProfileRow };
export default columns;
