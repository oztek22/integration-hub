import React, { useState } from 'react';
import { Modal, Input } from 'antd';

import FloatingLabel from 'components/FloatingLabelInput';
import { InputLabel } from 'components/Style/InputLabel';

import { FormBody, Column, Item, ModalTitle } from './ConnectionDetailsPopup.style';

const updateSourceConnection = (formData, updateFormData) => valueObj => {
  updateFormData({ ...formData, ...valueObj });
};

const { TextArea } = Input;

const SourceConnectionDetailsPopup = ({
  edit = true,
  id,
  title,
  type,
  baseUrl,
  requestObject,
  destinationConnection,
  visible,
  onSave,
  onCancel,
}) => {

  const [formData, updateFormData] = useState({ id });
  const updateData = updateSourceConnection(formData, updateFormData);

  return (
    <div>
      <Modal title={
          <ModalTitle>
            {`${edit ? 'Edit' : 'Create'} Source Connection`}
          </ModalTitle>
        }
        visible={visible} onOk={() => onSave(formData)} onCancel={onCancel}
        width={800} okText={`${edit ? 'Save' : 'Create'}`} >
        <FormBody>
          <Column>            
            <Item>
              <FloatingLabel
                value={title}
                placeholder="NAME OF THE CONNECTION"
                onChange={event => updateData({ title: event.target.value })}
              />
            </Item>

            <Item>
              <FloatingLabel
                value={baseUrl}
                placeholder="BASE URL"
                onChange={event => updateData({ baseUrl: event.target.value })}
              />
            </Item>
            <Item style={{ width: '70%', padding: '30px 0px 0px' }}>
              <InputLabel>REQUEST OBJECT</InputLabel>
              <TextArea
                onChange={event => updateData({ requestObject: event.target.value })}
                placeholder="REQUEST OBJECT"
                defaultValue={requestObject}
                autosize
              />
            </Item>
          </Column>
        </FormBody>
      </Modal>
    </div>
  );
};

export default SourceConnectionDetailsPopup;
