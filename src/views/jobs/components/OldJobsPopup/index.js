import React from 'react';
import { Modal } from 'antd';
import styled from '@emotion/styled';

import JobsTable from '../../model-views/JobsTable';

import { CompletedDot, ErroredDot } from '../../Jobs.style';

const ModalTitle = styled.div`
  font-size: 20px;
  color: #222f42;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const renderTitle = index => {
  if (index === 0) {
    return (
      <>
        <CompletedDot size="large" />
        Completed Jobs
      </>
    );
  } else if (index === 1) {
    return (
      <>
        <ErroredDot size="large" />
        Errored Jobs
      </>
    );
  }
};

const OldJobsPopup = ({ index, onClose }) => {
  return (
    <Modal
      title={<ModalTitle>{renderTitle(index)}</ModalTitle>}
      visible={true}
      footer={null}
      width={878}
      onCancel={onClose}
    >
      <JobsTable archiveJobs={true} />
    </Modal>
  );
};

export default OldJobsPopup;
