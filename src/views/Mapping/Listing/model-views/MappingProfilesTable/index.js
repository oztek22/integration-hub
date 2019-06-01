import React from 'react';
// import { observer } from 'mobx-react-lite';
import { Observer } from 'mobx-react';

import { Table } from 'antd';
import { cloneDeep } from 'lodash/cloneDeep';

import tableColumns, { mappingProfileRow } from './columns';

const MappingProfileTable = ({
  store,
  actions,
  onCancel,
  onMappingEdit,
  editMappingTransformerChange,
}) => {
  return (
    <Observer>
      {() => (
        <Table
          columns={tableColumns(
            onMappingEdit,
            actions.removeMappingProfile,
            actions.removeMappingTransformer
          )}
          dataSource={store.mappingProfiles}
          expandedRowRender={mappingProfileRow(
            editMappingTransformerChange,
            actions.removeMappingTransformer,
            actions.addUpdateMappingTransformer
          )}
          expandRowByClick={true}
          expandIcon={() => <span />}
          onCancel={onCancel}
        />
      )}
    </Observer>
  );
};

export default MappingProfileTable;
