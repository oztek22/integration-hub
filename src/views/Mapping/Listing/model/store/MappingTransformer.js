import { observable, computed } from 'mobx';

export default class MappingTransformer {
  @observable id;
  @observable type;
  @observable name;
  @observable formula;
  @observable sourceName;
  @observable destinationName;

  constructor(props) {
    this.sync(props);
  }

  sync(props) {
    this.id = props.id;
    this.type = props.type;
    this.name = props.name;
    this.formula = props.formula;
    this.sourceName = props.sourceName;
    this.destinationName = props.destinationName;
  }
}
