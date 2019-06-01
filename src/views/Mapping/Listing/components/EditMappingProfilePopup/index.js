import React, { useState } from 'react';
import { Modal, Select } from 'antd';

import FloatingLabel from 'components/FloatingLabelInput';
import { InputLabel } from 'components/Style/InputLabel';

import {
  FormBody,
  Column,
  Item,
  ModalTitle,
  ColumnBody,
} from './EditMappingProfilePopup.style';

const sources = [
  { key: 'source1', name: 'Source 1' },
  { key: 'source2', name: 'Source 2' },
  { key: 'source3', name: 'Source 3' },
];

const destinations = [
  { key: 'destination1', name: 'Destination 1' },
  { key: 'destination2', name: 'Destination 2' },
  { key: 'destination3', name: 'Destination 3' },
  { key: 'destination4', name: 'Destination 4' },
];

const updateProfileData = (formData, updateFormData) => valueObj => {
  updateFormData({ ...formData, ...valueObj });
};

const EditMappingProfilePopup = ({
  edit = false,
  id,
  name,
  source,
  destination,
  visible,
  onSave,
  onCancel,
}) => {
  const [formData, updateFormData] = useState({ id });
  const updateData = updateProfileData(formData, updateFormData);

  // console.log('formData:: ', formData);
  return (
    <Modal
      title={
        <ModalTitle>
          {name ? `Edit ${name}` : `Create a Mapping Profile`}
        </ModalTitle>
      }
      visible={visible}
      onOk={() => onSave(formData)}
      onCancel={onCancel}
      width={800}
      okText={`${edit ? 'Save' : 'Create'}`}
    >
      <FormBody>
        <Item style={{ width: '50%' }}>
          <FloatingLabel
            value={name}
            placeholder="Mapping Profile name"
            onChange={event => updateData({ name: event.target.value })}
          />
        </Item>
        <ColumnBody>
          <Column side="left">
            <Item>
              <InputLabel>SELECT SOURCE</InputLabel>
              <Select
                defaultValue={edit ? source.key : undefined}
                onChange={value =>
                  updateData({
                    source: {
                      key: value,
                      name: sources.find(s => s.key === value).name,
                    },
                  })
                }
                style={{ width: '100%' }}
                placeholder="Select Source"
              >
                {sources.map(source => (
                  <Select.Option key={source.key} value={source.key}>
                    {source.name}
                  </Select.Option>
                ))}
              </Select>
            </Item>
          </Column>

          <Column side="right">
            <Item>
              <InputLabel>SELECT DESTINATION</InputLabel>
              <Select
                defaultValue={edit ? destination.key : undefined}
                onChange={value =>
                  updateData({
                    destination: {
                      key: value,
                      name: destinations.find(d => d.key === value).name,
                    },
                  })
                }
                style={{ width: '100%' }}
                placeholder="Select Destination"
              >
                {destinations.map(destination => (
                  <Select.Option key={destination.key} value={destination.key}>
                    {destination.name}
                  </Select.Option>
                ))}
              </Select>
            </Item>
          </Column>
        </ColumnBody>
      </FormBody>
    </Modal>
  );
};

export default EditMappingProfilePopup;
