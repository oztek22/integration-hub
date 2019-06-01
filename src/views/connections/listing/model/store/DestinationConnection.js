import { observable } from 'mobx';

export default class DestinationConnection {
  @observable id;
  @observable title;
  @observable type;
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
    this.baseUrl = props.baseUrl;
    this.portNumber = props.portNumber;
    this.userName = props.userName;
    this.password = props.password;
  }
}
