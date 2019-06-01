import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';

import FloatingLabel from 'components/FloatingLabelInput';
import { InputLabel } from 'components/Style/InputLabel';

import {
  FormBody,
  Column,
  Item,
  ModalTitle,
  ColumnBody,
} from './EditMappingTransformerPopup.style';

const { TextArea } = Input;

const updateTransformerData = (formData, updateFormData) => valueObj => {
  updateFormData({ ...formData, ...valueObj });
};

const EditMappingFormulaPopup = ({
  edit = false,
  profileId,
  id,
  name: transformerName,
  formula,
  sourceName,
  destinationName,
  visible,
  onSave,
  onCancel,
}) => {
  const [formData, updateFormData] = useState({
    id,
    type: 'custom',
    name: 'Custom',
  });
  const updateData = updateTransformerData(formData, updateFormData);

  return (
    <Modal
      title={
        <ModalTitle>
          {transformerName ? `Edit ${transformerName}` : `Create a Transformer`}
        </ModalTitle>
      }
      visible={visible}
      onOk={() => onSave(profileId, formData)}
      onCancel={onCancel}
      width={800}
      okText={`${edit ? 'Save' : 'Create'}`}
    >
      <FormBody>
        <Item style={{ width: '50%' }}>
          <InputLabel>SELECT TRANSFORMER TYPE</InputLabel>
          <Select
            defaultValue={'custom'}
            onChange={() => {}}
            style={{ width: '100%' }}
            placeholder="Select Source"
          >
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
        </Item>
        <ColumnBody>
          <Column side="left">
            <FloatingLabel
              onChange={e => updateData({ sourceName: e.target.value })}
              value={sourceName}
              placeholder="SOURCE NAME"
            />
          </Column>
          <Column side="right">
            <FloatingLabel
              onChange={e => updateData({ destinationName: e.target.value })}
              value={destinationName}
              placeholder="DESTINATION NAME"
            />
          </Column>
        </ColumnBody>
        <Item style={{ width: '70%', padding: '30px 0px 0px' }}>
          <InputLabel>TRANSFORMER FORMULA</InputLabel>
          <TextArea
            onChange={e => updateData({ formula: e.target.value })}
            defaultValue={formula}
            placeholder="Enter formula here"
            autosize
          />
        </Item>
      </FormBody>
    </Modal>
  );
};

export default EditMappingFormulaPopup;
