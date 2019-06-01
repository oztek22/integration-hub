import { observable } from 'mobx';

export default class Job {
  @observable id;
  @observable name = '';
  @observable jobType;
  @observable source;
  @observable sourceBaseUrl;
  @observable sourcePortNumber;
  @observable destination;
  @observable destinationBaseUrl;
  @observable destinationPortNumber;
  @observable mappingProfile = 'lorem ipsum';
  @observable scheduledTime = [];

  constructor(props) {
    this.sync(props);
  }

  sync(props) {
    this.id = props.id;
    this.name = props.name;
    this.jobType = props.jobType;
    this.source = props.source;
    this.sourceBaseUrl = props.sourceBaseUrl;
    this.sourcePortNumber = props.sourcePortNumber;
    this.destination = props.destination;
    this.destinationBaseUrl = props.destinationBaseUrl;
    this.destinationPortNumber = props.destinationPortNumber;
    this.mappingProfile = props.mappingProfile;
    this.scheduledTime = props.scheduledTime;
  }
}
