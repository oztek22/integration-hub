import styled from '@emotion/styled';
import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import moment from 'moment';

import { theme } from 'style/theme';

const MenuItem = styled.span`
  font-family: 'Avenir Book', sans-serif;
  font-size: 14px;
  color: ${theme.color.black1};
  padding: 0px 25px 0px 0px;

  & span {
    margin-left: 13px;
  }
`;
const columns = (archiveJobs, runScheduledJob, onJobClick, removeJob) => {
  const columnsData = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'SOURE',
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
      key: 'mappingProfile',
    },
    {
      title: 'SCHEDULED TIME',
      dataIndex: 'scheduledTime',
      render: (text, record) =>
        moment(record.scheduledTime[0]).format('MMM DD, hh:mma'),
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
                  <Menu.Item onClick={() => runScheduledJob(record)}>
                    <MenuItem>
                      <Icon
                        type="caret-right"
                        theme="filled"
                        style={{ color: theme.color.black1, opacity: '0.6' }}
                      />
                      <span>Run</span>
                    </MenuItem>
                  </Menu.Item>
                  <Menu.Item onClick={() => onJobClick(record)}>
                    <MenuItem>
                      <Icon
                        type="edit"
                        theme="filled"
                        style={{ color: theme.color.black1, opacity: '0.6' }}
                      />
                      <span>Edit</span>
                    </MenuItem>
                  </Menu.Item>
                  <Menu.Item onClick={() => removeJob(record.id)}>
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
  if (archiveJobs) {
    columnsData.splice(5, 1);
  }
  return columnsData;
};

export default columns;
