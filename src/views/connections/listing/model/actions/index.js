import { action } from 'mobx';
import ObjectId from 'bson-objectid';
import cloneDeep from 'lodash/cloneDeep';

import SourceConnection from '../store/SourceConnection';
import DestinationConnection from '../store/DestinationConnection';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  syncProps(props) {
    this.store.sync(props);
  }

  @action
  editConnectionChange = connection => {
    this.store.editConnection = connection;
    this.store.editConnectionType = null;
  };

  @action
  editSourceConnectionChange = connection => {
    this.store.editConnection = connection;
    this.store.editConnectionType = 'SOURCE';
  };

  @action
  editDestinationConnectionChange = connection => {
    this.store.editConnection = connection;
    this.store.editConnectionType = 'DESTINATION';
  };

  @action
  addUpdateSourceConnection = newConnection => {
    var newConnectionWithDefaultValues = cloneDeep(newConnection);
    if(newConnection.id) {
      let connectionIndex = this.store.sourceConnections.findIndex(
        sourceConnection => sourceConnection.id === newConnection.id
      );

      this.store.sourceConnections[connectionIndex] = {
        ...this.store.sourceConnections[connectionIndex],
        ...newConnection,
      };

      // window.sourceConnections[connectionIndex] = {
      //   ...this.store.sourceConnections[connectionIndex],
      //   ...newConnection,
      // }

    } else {
      newConnectionWithDefaultValues.id = ObjectId.generate();
      newConnectionWithDefaultValues.type = 'Source';

      this.store.sourceConnections.push(
        new SourceConnection(newConnectionWithDefaultValues)
      );

      // window.sourceConnections.push(
      //   new SourceConnection(newConnectionWithDefaultValues)
      // )

      // console.log(window.sourceConnetions);
    }

    this.editSourceConnectionChange(null);

    // console.log(newConnectionWithDefaultValues);

    // var results = addSourceConnection(newConnectionWithDefaultValues);
    // results.then(res => {
    //   console.log(res);
    //   // if(res.body.result !== "Success") {
    //   //   this.editSourceConnectionChange(null);
    //   // } else {
    //   //   this.editSourceConnectionChange(null);
    //   //   console.log(res.body);
    //   // }
    // });   
  };

  @action
  addUpdateDestinationConnection = newConnection => {
    const newConnectionWithDefaultValues = cloneDeep(newConnection);
    if (newConnection.id) {
      let connectionIndex = this.store.destinationConnections.findIndex(
        connection => connection.id === newConnection.id
      );
      this.store.destinationConnections[connectionIndex] = {
        ...this.store.destinationConnections[connectionIndex],
        ...newConnection,
      };
    } else {
      newConnectionWithDefaultValues.id = ObjectId.generate();
      newConnectionWithDefaultValues.type = 'Destination';

      this.store.destinationConnections.push(
        new DestinationConnection(newConnectionWithDefaultValues)
      );
    }

    this.editDestinationConnectionChange(null);

    // var results = addDestinationConnection(newConnection);
    // results.then(res => {
    //   if(res.body.result !== "Success") {
    //     this.editDestinationConnectionChange(null);
    //   } else {
    //     this.editDestinationConnectionChange(null);
    //     console.log(res.body);
    //   }
    // });
  };

  @action
  removeConnection = connectionId => {
    // debugger;
    this.store.connections = this.store.connections.filter(
      connection => connection.id !== connectionId
    );

    console.log(this.store.connections);
  };

  @action
  removeSourceConnection = connectionId => {
    // debugger;
    this.store.sourceConnections = this.store.sourceConnections.filter(
      connection => connection.id !== connectionId
    );

    console.log(this.store.sourceConnections);
  };

  @action
  removeDestinationConnection = connectionId => {
    // debugger;
    this.store.destinationConnections = this.store.destinationConnections.filter(
      connection => connection.id !== connectionId
    );

    console.log(this.store.destinationConnections);
  };
}

export default Actions;
