import { observable } from 'mobx';
import Job from './Job';

export default class RootStore {
  @observable jobs = [];
  @observable erroredJobs = 0;
  @observable successfulJobs = 0;
  @observable totalJobs = 0;
  @observable editJob = null;

  sync(props) {
    this.jobs = props.jobsMockData.map(
      job => this.jobs.find(mp => mp.id === job.id) || new Job(job)
    );
  }
}
