import { action } from 'mobx';
import ObjectId from 'bson-objectid';
import cloneDeep from 'lodash/cloneDeep';

import Job from '../store/Job';

import { runJob } from 'helpers/dataFetch/index';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  syncProps(props) {
    this.store.sync(props);
  }

  @action
  editJobChange = job => {
    this.store.editJob = job;
  };

  @action
  addUpdateJob = newJob => {
    const newJobWithDefaultValues = cloneDeep(newJob);
    if (newJob.id) {
      let jobIndex = this.store.jobs.findIndex(job => job.id === newJob.id);
      this.store.jobs[jobIndex] = {
        ...this.store.jobs[jobIndex],
        ...newJob,
      };
    } else {
      newJobWithDefaultValues.id = ObjectId.generate();
      newJobWithDefaultValues.mappingData = ['Source', 'Destination'];

      this.store.jobs.push(new Job(newJobWithDefaultValues));
      this.updateTotalJobs();
    }

    // close Modal
    this.editJobChange(null);
  };

  @action
  removeJob = jobId => {
    // debugger;
    this.store.jobs = this.store.jobs.filter(job => job.id !== jobId);

    console.log(this.store.jobs);
  };

  @action
  updateErroredJobs = () => {
    this.store.erroredJobs++;
  }

  @action
  updateSuccessfulJobs = () => {
    this.store.successfulJobs++;
  }

  @action
  updateTotalJobs = () => {
    this.store.totalJobs++;
  }

  @action
  runScheduledJob = newJob => {
    const newJobID = cloneDeep(newJob);

    var source = {
      url: "https://api.usaspending.gov/api/v2/search/spending_by_award/",
      data: "{ \"fields\": [ \"Award ID\", \"Recipient Name\", \"Recipient DUNS Number\", \"Description\", \"Awarding Agency\", \"Awarding Sub Agency\", \"Base Obligation Date\", \"Place of Performance State Code\", \"Place of Performance Country Code\", \"Period of Performance Start Date\", \"Period of Performance Current End Date\", \"Award Amount\", \"CFDA Number\" ], \"filters\": { \"time_period\": [ { \"start_date\": \"2007-10-01\", \"end_date\": \"2019-09-30\" } ], \"award_type_codes\": [\"A\",\"B\",\"C\",\"D\",\"02\", \"03\", \"04\", \"05\"], \"recipient_search_text\": [ \"099925414\" ] }, \"limit\": 5, \"order\": \"desc\", \"sort\": \"Base Obligation Date\" }",
    }

    var destination = {
      host: "integrationhub.ciupl0p5utwk.us-east-1.rds.amazonaws.com",
      user: "IntegrationDBUser",
      password: "IntegrationDBUser01",
      db: "IntegrationHubDB",
      table: "usa_spending"
    }
    
    var results = runJob(source, destination);
    results.then(res => {
      if(res.body.result !== "Success") {
        console.log(res);
        this.updateErroredJobs();
      } else {
        this.updateSuccessfulJobs();
      }
    });
  }
}

export default Actions;
