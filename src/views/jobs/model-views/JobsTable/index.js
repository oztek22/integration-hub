import React from 'react';
import { Table } from 'antd';
import { Observer } from 'mobx-react';

import tableColumns from './columns';

const JobsTable = ({ onJobClick, archiveJobs, model }) => {
  return (
    <Observer>
      {() => (
        <Table
          columns={tableColumns(
            archiveJobs,
            model.actions.runScheduledJob,
            onJobClick,
            model.actions.removeJob
          )}
          dataSource={model.store.jobs}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => onJobClick && onJobClick(record),
            };
          }}
        />
      )}
    </Observer>
  );
};

export default JobsTable;
