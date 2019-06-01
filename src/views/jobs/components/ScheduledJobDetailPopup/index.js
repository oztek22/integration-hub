import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';
// import css from '@emotion/css';
import { DatePicker } from 'antd';
import moment from 'moment';
import { observer } from 'mobx-react-lite';

import FloatingLabel from 'components/FloatingLabelInput';
import { InputLabel } from 'components/Style/InputLabel';

import {
  FormBody,
  Column,
  Item,
  ModalTitle,
  SectionTitle,
  ColumnBody,
} from './ScheduledJobDetailPopup.style';

const { RangePicker } = DatePicker;

const jobTypes = [
  { key: 'dataMasking', name: 'Data Masking' },
  { key: 'expression', name: 'Expression' },
  { key: 'joiner', name: 'Joiner' },
  { key: 'lookUpAndCopy', name: 'Look Up and Copy' },
];

var sources = [];

var destinations = [];

const updateJob = (formData, updateFormData) => valueObj => {
  updateFormData({ ...formData, ...valueObj });
};

const ScheduledJobDetailPopup = observer(
  ({
    edit = true,
    id,
    name,
    jobType,
    source,
    destination,
    scheduledTime,
    visible,
    onSave,
    onCancel,
  }) => {
    const [formData, updateFormData] = useState({ id });
    const updateData = updateJob(formData, updateFormData);

    sources = window.sourceConnections;
    destinations = window.destinationConnections;

    return (
      <div>
        <Modal
          title={
            <ModalTitle>{name ? `Edit ${name}` : `Schedule a Job`}</ModalTitle>
          }
          visible={visible}
          onOk={() => onSave(formData)}
          onCancel={onCancel}
          width={800}
          okText={`${edit ? 'Save' : 'Create'}`}
        >
          <FormBody>
            <ColumnBody>
              <Column side="left">
                <Item style={{ padding: '15px 0px 0px' }}>
                  <FloatingLabel
                    value={name}
                    placeholder="JOB NAME"
                    onChange={event => updateData({ name: event.target.value })}
                  />
                </Item>
                <SectionTitle>Source Profile</SectionTitle>
                <Item>
                  <InputLabel>SELECT A SOURCE PROFILE</InputLabel>
                  <Select
                    defaultValue={edit ? source.title : undefined}
                    style={{ width: '100%' }}
                    placeholder="Select Profile"
                    onChange={value =>
                      updateData({
                        source: {
                          key: value,
                          name: sources.find(s => s.title === value).title,
                        },
                      })
                    }
                  >
                    {sources.map(profile => (
                      <Select.Option key={profile.title} value={profile.title}>
                        {profile.title}
                      </Select.Option>
                    ))}
                  </Select>
                </Item>
              </Column>

              <Column side="right">
                <Item style={{ width: '50%' }}>
                  <InputLabel>SELECT A JOB TYPE</InputLabel>
                  <Select
                    defaultValue={edit ? jobType.key : undefined}
                    style={{ width: '100%' }}
                    placeholder="Select a Job type"
                    onChange={value =>
                      updateData({
                        jobType: {
                          key: value,
                          name: jobTypes.find(s => s.key === value).name,
                        },
                      })
                    }
                  >
                    {jobTypes.map(type => (
                      <Select.Option key={type.key} value={type.key}>
                        {type.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Item>
                <SectionTitle>Destination Profile</SectionTitle>
                <Item>
                  <InputLabel>SELECT A DESTINATION PROFILE</InputLabel>
                  <Select
                    defaultValue={edit ? destination.key : undefined}
                    style={{ width: '100%' }}
                    placeholder={`Select Profile`}
                    onChange={value =>
                      updateData({
                        destination: {
                          key: value,
                          name: destinations.find(s => s.title === value).title,
                        },
                      })
                    }
                  >
                    {destinations.map(profile => (
                      <Select.Option key={profile.title} value={profile.title}>
                        {profile.title}
                      </Select.Option>
                    ))}
                  </Select>
                </Item>
              </Column>
            </ColumnBody>

            <SectionTitle>Set Date/Time</SectionTitle>
            <Item>
              <RangePicker
                defaultValue={
                  edit
                    ? [moment(scheduledTime[0]), moment(scheduledTime[1])]
                    : undefined
                }
                showTime={{ format: 'HH:mm' }}
                format="MMM DD HH:mma"
                placeholder={['Start Time', 'End Time']}
                onChange={dates =>
                  updateData({
                    scheduledTime: [
                      dates[0].toISOString(),
                      dates[1].toISOString(),
                    ],
                  })
                }
                style={{ width: '300px' }}
              />
            </Item>
          </FormBody>
        </Modal>
      </div>
    );
  }
);

export default ScheduledJobDetailPopup;
