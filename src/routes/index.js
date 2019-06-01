import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// views
import { CustomRoute } from 'components/CustomRoute';
import MainWrapper from 'components/MainWrapper';
import TopBar from 'components/TopBar';
import Login from 'views/login';
// import Connections from 'views/Connections';
import ConnectionList from 'views/connections/listing';
import Jobs from 'views/jobs';
import MappingProfile from 'views/Mapping/Listing';

const routes = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route name="Integrartion Hub" path="/login" component={Login} />
        <MainWrapper>
          <Switch>
            <CustomRoute
              name="Connections"
              path="/connections"
              component={ConnectionList}
              childRoutes={[
                <CustomRoute
                  key="1"
                  name="Connection CHILD"
                  path="/connections/child"
                  exact={true}
                  render={props => <div>Child</div>}
                />,
              ]}
            />
            <CustomRoute name="Jobs" path="/jobs" component={Jobs} />
            <CustomRoute
              name="Mapping Profile"
              path="/mapping-profile"
              component={MappingProfile}
            />
            <Redirect path="/" to="/connections" exact={true} />
          </Switch>
        </MainWrapper>
      </Switch>
    </Router>
  );
};

export default routes;
