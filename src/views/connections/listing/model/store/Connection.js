import { observable, computed } from 'mobx';

export default class Connection {
  @observable id;
  @observable name = '';
  @observable jobType;
  @observable type;
  @observable source;
  @observable sourceBaseUrl;
  @observable sourcePortNumber;
  @observable destination;
  @observable destinationBaseUrl;
  @observable destinationPortNumber;
  @observable mappingProfile = 'lorem ipsum';
  @observable scheduledTime = [];

  @observable id;
  @observable title;
  @observable type;
  @observable origin;
  @observable destinationConnection;
  @observable baseUrl;
  @observable portNumber;
  @observable userName;
  @observable password;

  constructor(props) {
    this.sync(props);
  }

  sync(props) {
    this.id = props.id;
    this.title = props.title;
    this.type = props.type;
    this.origin = props.origin;
    this.destinationConnection = props.destinationConnection;
    this.baseUrl = props.baseUrl;
    this.portNumber = props.portNumber;
    this.userName = props.userName;
    this.password = props.password;
  }
}
