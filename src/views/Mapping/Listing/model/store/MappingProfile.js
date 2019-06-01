import { observable, computed } from 'mobx';
import MappingTransformer from './MappingTransformer';

export default class MappingProfile {
  @observable id;
  @observable name;
  @observable source;
  @observable destination;
  @observable transformationData = ['Source', 'Destination'];

  constructor(props) {
    this.sync(props);
  }

  sync(props) {
    this.id = props.id;
    this.name = props.name;
    this.source = props.source;
    this.destination = props.destination;

    this.transformationData = props.mappingData.map(mappingTransformer => {
      if (typeof mappingTransformer === 'string') {
        return mappingTransformer;
      }

      return (
        this.transformationData.find(
          transformer => transformer.id === mappingTransformer.id
        ) || new MappingTransformer(mappingTransformer)
      );
    });
  }
}
