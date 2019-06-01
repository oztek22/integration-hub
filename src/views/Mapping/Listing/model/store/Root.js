import { observable, computed } from 'mobx';
import MappingProfile from './MappingProfile';

export default class RootStore {
  @observable mappingProfiles = [];

  @observable editMappingProfile = null;
  @observable editMappingTransformer = null;

  sync(props) {
    this.mappingProfiles = props.mappingData.map(
      mappingProfile =>
        this.mappingProfiles.find(mp => mp.id === mappingProfile.id) ||
        new MappingProfile(mappingProfile)
    );
  }
}
