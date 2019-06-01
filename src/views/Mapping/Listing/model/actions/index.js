import { action } from 'mobx';
import ObjectId from 'bson-objectid';
import cloneDeep from 'lodash/cloneDeep';

import MappingProfile from '../store/MappingProfile';
import MappingTransformer from '../store/MappingTransformer';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  syncProps(props) {
    this.store.sync(props);
  }

  @action
  editMappingProfileChange = profile => {
    this.store.editMappingProfile = profile;
  };

  @action
  editMappingTransformerChange = transformer => {
    this.store.editMappingTransformer = transformer;
  };

  @action
  addUpdateMappingProfile = newMappingProfile => {
    const newMappingProfileWithDefaultValues = cloneDeep(newMappingProfile);
    if (newMappingProfile.id) {
      let mappingProfileIndex = this.store.mappingProfiles.findIndex(
        mp => mp.id === newMappingProfile.id
      );
      this.store.mappingProfiles[mappingProfileIndex] = {
        ...this.store.mappingProfiles[mappingProfileIndex],
        ...newMappingProfile,
      };
    } else {
      newMappingProfileWithDefaultValues.id = ObjectId.generate();
      newMappingProfileWithDefaultValues.mappingData = [
        'Source',
        'Destination',
      ];

      this.store.mappingProfiles.push(
        new MappingProfile(newMappingProfileWithDefaultValues)
      );
    }

    // close Modal
    this.editMappingProfileChange(null);
  };

  @action
  removeMappingProfile = mappingProfileId => {
    this.store.mappingProfiles = this.store.mappingProfiles.filter(
      mp => mp.id !== mappingProfileId
    );

    // console.log(this.store.mappingProfiles);
  };

  @action
  addUpdateMappingTransformer = (mappingProfileId, newMappingTransformer) => {
    const newMappingTransformerWithDefaultValues = cloneDeep(
      newMappingTransformer
    );
    if (mappingProfileId && newMappingTransformerWithDefaultValues.id) {
      let mappingProfileIndex = this.store.mappingProfiles.findIndex(
        mp => mp.id === mappingProfileId
      );

      let mappingTransformerIndex = this.store.mappingProfiles[
        mappingProfileIndex
      ].transformationData.findIndex(
        td => td.id === newMappingTransformerWithDefaultValues.id
      );

      this.store.mappingProfiles[mappingProfileIndex].transformationData[
        mappingTransformerIndex
      ] = {
        ...this.store.mappingProfiles[mappingProfileIndex].transformationData[
          mappingTransformerIndex
        ],
        newMappingTransformerWithDefaultValues,
      };
    } else {
      newMappingTransformerWithDefaultValues.id = ObjectId.generate();

      let mappingProfileIndex = this.store.mappingProfiles.findIndex(
        mp => mp.id === mappingProfileId
      );
      const profileTransformerArray = this.store.mappingProfiles[
        mappingProfileIndex
      ].transformationData;

      profileTransformerArray.splice(
        profileTransformerArray.length - 1,
        0,
        new MappingTransformer(newMappingTransformerWithDefaultValues)
      );
    }

    // close Modal
    this.editMappingTransformerChange(null);
  };

  @action
  removeMappingTransformer = (mappingProfileId, mappingTransformerId) => {
    this.store.mappingProfiles.forEach(mp => {
      if (mp.id === mappingProfileId) {
        mp.transformationData = mp.transformationData.filter(
          td => td.id !== mappingTransformerId
        );
      }
    });
    console.log(this.store.mappingProfiles);
  };
}

export default Actions;
