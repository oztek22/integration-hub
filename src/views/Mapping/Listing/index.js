import React from 'react';
import { observer } from 'mobx-react';
import { observer as observerLite } from 'mobx-react-lite';

import { PageTitle } from 'components/Style/PageTitle';
import MappingTable from './model-views/MappingProfilesTable';
import EditMappingProfilePopup from './components/EditMappingProfilePopup';
import EditMappingTransformerPopup from './components/EditMappingTransformerPopup';
import Model from './model';

import { mappingData } from '../mock-data/mapping-mock-data';

import {
  Wrapper,
  TitleWrapper,
  MappingListWrapper,
  MappingList,
  ButtonWrapper,
} from './Listing.style';
import { Button } from 'antd';

class MappingModelInit extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();
    this.model.actions.syncProps({ mappingData });
  }

  render() {
    return <Mapping model={this.model} />;
  }
}

export default observer(MappingModelInit);

const Mapping = observerLite(({ model }) => {
  const { editMappingProfile, editMappingTransformer } = model.store;

  const {
    editMappingProfileChange,
    editMappingTransformerChange,
  } = model.actions;

  // const [editMappingProfile, editMappingProfileChange] = useState(null);
  // const [editMappingTransformer, editMappingTransformerChange] = useState(null);

  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle>Mapping Profile</PageTitle>
      </TitleWrapper>
      <ButtonWrapper>
        <Button
          type="primary"
          icon="plus"
          onClick={() => editMappingProfileChange({ create: true })}
        >
          Mapping Profile
        </Button>
      </ButtonWrapper>
      <MappingListWrapper>
        <MappingList>
          <MappingTable
            store={model.store}
            actions={model.actions}
            onMappingEdit={mapping => editMappingProfileChange(mapping)}
            editMappingTransformerChange={transformer =>
              editMappingTransformerChange(transformer)
            }
          />
        </MappingList>
      </MappingListWrapper>
      {editMappingProfile ? (
        <EditMappingProfilePopup
          {...editMappingProfile}
          visible={true}
          edit={!editMappingProfile.create}
          onCancel={() => editMappingProfileChange(null)}
          onSave={model.actions.addUpdateMappingProfile}
        />
      ) : null}
      {editMappingTransformer ? (
        <EditMappingTransformerPopup
          {...editMappingTransformer}
          edit={!editMappingTransformer.create}
          visible={true}
          onCancel={() => editMappingTransformerChange(null)}
          onSave={model.actions.addUpdateMappingTransformer}
        />
      ) : null}
    </Wrapper>
  );
});
