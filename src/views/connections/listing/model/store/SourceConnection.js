import { observable } from 'mobx';

export default class SourceConnection {
    @observable id;
    @observable title;
    @observable type;
    @observable baseUrl;
    @observable requestObject;
    @observable destinationConnection;

    constructor(props) {
        this.sync(props);
    }

    sync(props) {
        this.id = props.id;
        this.title = props.title;
        this.type = props.type;
        this.baseUrl = props.baseUrl;
        this.requestObject = props.requestObject;
        this.destinationConnection = props.destinationConnection;
    }
}
