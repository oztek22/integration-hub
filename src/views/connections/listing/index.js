import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { PageTitle } from 'components/Style/PageTitle';

import ConnectionType from 'appConsts/ConnectionType';

import ConnectionItem from '../components/ConnectionItem';
// import ConnectionDetailsPopup from '../components/ConnectionDetailsPopup';
import SourceConnectionDetailsPopup from '../components/SourceConnectionDetailsPopup';
import DestinationConnectionDetailsPopup from '../components/DestinationConnectionDetailsPopup';

import Model from './model';

import { connections as mockConnections } from '../mock-data/mock-connectionsItems';

import {
  Wrapper,
  ListingWrapper,
  ButtonWrapper,
  TitleWrapper,
  Columns,
  // ArrowColumn,
  BlocksColumn,
  // Arrow,
} from './listing.style';

// import { getConnectionColumnWise } from '../utils/getConnectionColumnWise';

const MarginRight = {
  marginRight: 10 + 'px'
};

export default class ConnectionsModelInit extends React.Component {
  constructor(props) {
    super(props);
    this.model = new Model();
    this.model.actions.syncProps({ connections: mockConnections });
  }

  render() {
    return <ConnectionListing model={this.model} />;
  }
}

const TitleStyled = {
  fontSize: 20 + 'px',
  marginBottom: 20 + 'px'
}

const FullWidth = {
  width: 100 + '%'
}

const renderConnectionItems = (sourceConnections, destinationConnections, setActiveSourceItem, setActiveDestinationItem) => {
  // const { sources, destinations } = getConnectionColumnWise(sourceConnections, destinationConnections);

  return (
    <Columns>
      <BlocksColumn>
        {sourceConnections.length > 0 ? (
            <TitleWrapper style={FullWidth}>
              <PageTitle style={TitleStyled}>Sources</PageTitle>
            </TitleWrapper>
          ) : null}
        {sourceConnections.map((source, index) => (
          <ConnectionItem
            key={index}
            {...source}
            onClick={() => setActiveSourceItem(source)}
          />
        ))}
      </BlocksColumn>

      {/* <ArrowColumn>
        {sources.map((source, index) =>
          source.destExists ? <Arrow index={index} /> : null
        )}
      </ArrowColumn> */}
      
      <BlocksColumn>
      {destinationConnections.length > 0 ? (
            <TitleWrapper style={FullWidth}>
              <PageTitle style={TitleStyled}>Destinations</PageTitle>
            </TitleWrapper>
          ) : null}
        {destinationConnections.map((destination, index) => (
          <ConnectionItem
            key={index}
            {...destination}
            onClick={() => setActiveDestinationItem(destination)}
          />
        ))}
      </BlocksColumn>
    </Columns>
  );
};

const renderConnectionItemEditModal = (activeItem, activeItemType, model) => {
  if (!activeItem) {
    return null;
  }
  else {
    if (activeItemType === ConnectionType.Source) {
      return (
        <SourceConnectionDetailsPopup
          okText={activeItem.create !== true ? 'Save' : 'Create'}
          cancelText="Cancel"
          visible={!!activeItem}
          edit={!activeItem.create}
          onCancel={() => model.actions.editConnectionChange(null)}
          onSave={model.actions.addUpdateSourceConnection}
          {...activeItem}
        />
      );
    } else {
      return (
        <DestinationConnectionDetailsPopup
          okText={activeItem.create !== true ? 'Save' : 'Create'}
          cancelText="Cancel"
          visible={!!activeItem}
          edit={!activeItem.create}
          onCancel={() => model.actions.editConnectionChange(null)}
          onSave={model.actions.addUpdateDestinationConnection}
          {...activeItem}
        />
      );
    }
  }
  
};

const ConnectionListing = observer(({ model }) => {
  // const [modalOpen, modalOpenChange] = useState(false);
  // const [activeItem, setActiveItem] = useState(null);

  var sourceConnections = null;

  if(window.sourceConnections == undefined) {
    window.sourceConnections = model.store.sourceConnections;
  } else if (model.store.sourceConnections.length == 0 && window.sourceConnections != undefined){
    model.store.sourceConnections = window.sourceConnections;
  } else {
    window.sourceConnections = model.store.sourceConnections;
  }

  sourceConnections = window.sourceConnections;

  var destinationConnections = null;

  if(window.destinationConnections == undefined) {
    window.destinationConnections = model.store.destinationConnections;
  } else if (model.store.destinationConnections.length == 0 && window.destinationConnections != undefined){
    model.store.destinationConnections = window.destinationConnections;
  } else {
    window.destinationConnections = model.store.destinationConnections;
  }

  destinationConnections = window.destinationConnections;

  const activeItem = model.store.editConnection;
  const activeItemType = model.store.editConnectionType;
  
  const setActiveSourceItem = model.actions.editSourceConnectionChange;
  const setActiveDestinationItem = model.actions.editDestinationConnectionChange;

  return (
    <Wrapper>
      <TitleWrapper>
        <PageTitle>Connections</PageTitle>
      </TitleWrapper>
      <ButtonWrapper>
        <Button
          type="primary"
          icon="plus"
          style={MarginRight}
          onClick={() => setActiveSourceItem({ create: true })}
        >
          Source Connection
        </Button>
        <Button
          type="primary"
          icon="plus"
          onClick={() => setActiveDestinationItem({ create: true })}
        >
          Destination Connection
        </Button>
      </ButtonWrapper>
      <ListingWrapper>
        { renderConnectionItems(
            sourceConnections, 
            destinationConnections, 
            setActiveSourceItem,
            setActiveDestinationItem,
          )
        }
      </ListingWrapper>
      { renderConnectionItemEditModal(activeItem, activeItemType, model)}
    </Wrapper>
  );
});
