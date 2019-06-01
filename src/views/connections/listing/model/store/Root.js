import { observable } from 'mobx';
import Connection from './Connection';
import SourceConnection from './SourceConnection';
import DestinationConnection from './DestinationConnection';

export default class RootStore {
  @observable connections = [];
  @observable sourceConnections = [];
  @observable destinationConnections = [];
  
  @observable editConnection = null;
  @observable editConnectionType = null;
  @observable editSourceConnection = null;
  @observable editDestinationConnection = null;

  sync(props) {
    this.connections = props.connections.map(
      connection =>
        this.connections.find(mp => mp.id === connection.id) ||
        new Connection(connection)
    );

    if(props.sourceConnections != undefined) {
      this.sourceConnections = props.sourceConnections.map(
        sourceConnection => 
          this.sourceConnections.find(mp => mp.id === sourceConnection.id) ||
          new SourceConnection(sourceConnection)
      )
    }
    
    if(props.destinationConnections != undefined) {
      this.destinationConnections = props.destinationConnections.map(
        destinationConnection => 
          this.destinationConnections.find(mp => mp.id === destinationConnection.id) ||
          new DestinationConnection(destinationConnection)
      )
    }
  }
}
