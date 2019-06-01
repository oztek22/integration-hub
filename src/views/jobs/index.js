import React, { useState } from 'react';
import { PageTitle } from 'components/Style/PageTitle';
import { Button, Icon, Spin } from 'antd';
import { observer } from 'mobx-react-lite';

import { theme } from 'style/theme';

import { runJob, fetchJobsData } from 'helpers/dataFetch';

import JobsTable from './model-views/JobsTable';
import FilterDrawer from './components/FilterDrawer';
import OldJobsPopup from './components/OldJobsPopup';
import ScheduledJobDetailPopup from './components/ScheduledJobDetailPopup';

import Model from './model';

// JOBS Mock Data
import jobsMockData from './mock-data/jobs-mock-data';

import {
  Wrapper,
  TitleWrapper,
  CountersWrapper,
  Counter,
  JobsListWrapper,
  JobsList,
  ButtonWrapper,
  ScheduledDot,
  CompletedDot,
  ErroredDot,
  CounterLabel,
  CounterCount,
  TopRow,
  FilterButtonWrapper,
  IconWrapper,
} from './Jobs.style';

export default class JobsModelInit extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();

    
    this.model.actions.syncProps({ jobsMockData });
  
  }

  fetchAndSyncJobsData = async () => {

    const jobsData = await fetchJobsData();
    this.model.actions.syncProps({ jobsMockData });
  
  };

  render() {
    return <Jobs model={this.model} />;
  }
}

const Jobs = observer(({ model }) => {
  const [filterDrawerOpen, drawerOpenChange] = useState(false);
  const [jobsTablePopup, tablePopupOpen] = useState(-1);

  if(window.totalJobs == undefined) {
    window.totalJobs = model.store.totalJobs;
    window.erroredJobs = model.store.erroredJobs;
    window.successfulJobs = model.store.successfulJobs;
    window.jobs = model.store.jobs;
  } else if(model.store.totalJobs == 0 && window.totalJobs > model.store.totalJobs) {
    model.store.totalJobs = window.totalJobs;
    model.store.erroredJobs = window.erroredJobs;
    model.store.successfulJobs = window.successfulJobs;
    model.store.jobs = window.jobs;
  } else {
    window.totalJobs = model.store.totalJobs;
    window.erroredJobs = model.store.erroredJobs;
    window.successfulJobs = model.store.successfulJobs;
    window.jobs = model.store.jobs;
  }

  const scheduledJobDetailOpen = model.actions.editJobChange;
  const runScheduledJob = model.actions.runJob;
  const scheduledJobDetail = model.store.editJob;

  if (model.store.loadingData) {
    return <Spin />;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle>Jobs</PageTitle>
        <FilterButtonWrapper
          onClick={() => drawerOpenChange(!filterDrawerOpen)}
        >
          <IconWrapper>
            <Icon
              type="filter"
              style={{ fontSize: '13px', color: theme.color.purpleishBlue }}
            />
          </IconWrapper>
          Filter Jobs
        </FilterButtonWrapper>
      </TitleWrapper>
      <CountersWrapper>
        <Counter noClick={true}>
          <TopRow>
            <ScheduledDot />
            <CounterLabel>Scheduled Jobs</CounterLabel>
          </TopRow>
          <CounterCount>{model.store.totalJobs}</CounterCount>
        </Counter>
        <Counter onClick={() => tablePopupOpen(0)}>
          <TopRow>
            <CompletedDot />
            <CounterLabel>Completed Jobs</CounterLabel>
          </TopRow>
          <CounterCount>{model.store.successfulJobs}</CounterCount>
        </Counter>
        <Counter onClick={() => tablePopupOpen(1)}>
          <TopRow>
            <ErroredDot />
            <CounterLabel>Errored Jobs</CounterLabel>
          </TopRow>
          <CounterCount>{model.store.erroredJobs}</CounterCount>
        </Counter>
      </CountersWrapper>

      <JobsListWrapper>
        <TitleWrapper>
          <PageTitle>Scheduled Jobs</PageTitle>
        </TitleWrapper>
        <ButtonWrapper>
          <Button
            type="primary"
            icon="plus"
            onClick={() => scheduledJobDetailOpen({ create: true })}
          >
            Schedule a Job
          </Button>
        </ButtonWrapper>
        <JobsList>
          <JobsTable
            model={model}
            runJob={job => runScheduledJob(job)}
            onJobClick={job => scheduledJobDetailOpen(job)}
          />
        </JobsList>
        {jobsTablePopup > -1 && (
          <OldJobsPopup
            index={jobsTablePopup}
            onClose={() => tablePopupOpen(-1)}
          />
        )}
        <FilterDrawer
          onClose={() => drawerOpenChange(false)}
          visible={filterDrawerOpen}
        />
        {scheduledJobDetail && (
          <ScheduledJobDetailPopup
            {...scheduledJobDetail}
            edit={!scheduledJobDetail.create}
            onCancel={() => scheduledJobDetailOpen(null)}
            onSave={model.actions.addUpdateJob}
            visible={true}
          />
        )}
      </JobsListWrapper>
    </Wrapper>
  );
});
