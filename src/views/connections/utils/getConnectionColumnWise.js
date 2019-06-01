import { ConnectionType } from 'appConsts/ConnectionType';

const getConnectionColumnWise = (connections, destinationConnections) => {
  const sourcesWithDest = [];
  const sourcesWithoutDest = [];
  const destinationsWithSource = [];
  const destinations = [];

  connections.forEach(connection => {
    if (connection.type === ConnectionType.Destination) {
      destinations.push(connection);
    }
  });

  connections.forEach(connection => {
    if (connection.type === ConnectionType.Source) {
      if (connection.destinationConnection) {
        const destinationConnIndex = destinations.findIndex(
          dConnection => dConnection.id === connection.destinationConnection.key
        );
        if (destinationConnIndex > -1) {
          sourcesWithDest.push({ ...connection, destExists: true });
          destinationsWithSource.push(destinations[destinationConnIndex]);
          destinations.splice(destinationConnIndex, 1);
        } else {
          sourcesWithoutDest.push(connection);
        }
      } else {
        sourcesWithoutDest.push(connection);
      }
    }
  });

  return {
    sources: [...sourcesWithDest, ...sourcesWithoutDest],
    destinations: [...destinationsWithSource, ...destinations],
  };
};

export { getConnectionColumnWise };
