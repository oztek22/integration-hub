import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';

import FloatingLabel from 'components/FloatingLabelInput';

import {
  FormBody,
  Column,
  Item,
  ModalTitle,
} from './ConnectionDetailsPopup.style';

const updateConnection = (formData, updateFormData) => valueObj => {
  updateFormData({ ...formData, ...valueObj });
};

const DestinationConnectionDetailsPopup = ({
  edit = true,
  id,
  title,
  type,
  baseUrl,
  portNumber,
  userName,
  password,
  visible,
  onSave,
  onCancel,
}) => {
  const [formData, updateFormData] = useState({ id });
  const updateData = updateConnection(formData, updateFormData);

  return (
    <div>
      <Modal title={
          <ModalTitle>
            {`${edit ? 'Edit' : 'Create'} Destination Connection`}
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
            <Item>
              <FloatingLabel
                value={portNumber}
                placeholder="PORT NUMBER"
                onChange={event =>
                  updateData({ portNumber: event.target.value })
                }
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <FloatingLabel
                value={userName}
                placeholder="USERNAME"
                onChange={event => updateData({ userName: event.target.value })}
              />
            </Item>
            <Item>
              <FloatingLabel
                value={password}
                placeholder="PASSWORD"
                onChange={event => updateData({ password: event.target.value })}
              />
            </Item>
          </Column>
        </FormBody>
      </Modal>
    </div>
  );
};

export default DestinationConnectionDetailsPopup;
