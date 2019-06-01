// Import External Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { matchPath } from 'react-router';

// Import Components

const checkIfMatched = (path, location) =>
  matchPath(location.pathname, {
    path,
    exact: false,
    strict: false,
  });

export class CustomRoute extends React.Component {
  render() {
    const {
      component: Component,
      render,
      childRoutes = [],
      childWithoutSwitch = false,
      permission,
      ...routeProps
    } = this.props;

    const ChildSwitchRoutes =
      childRoutes.length > 0 ? (
        childWithoutSwitch ? (
          childRoutes
        ) : (
          <Switch>{childRoutes}</Switch>
        )
      ) : null;

    const componentOrRender = cProps => {
      return Component ? (
        <Component {...cProps} />
      ) : (
        (render && render(cProps)) || <div>No component or render</div>
      );
    };

    const routesOrCompoenent = (routePropsRef, props) => {
      const cProps = { ...props };

      return checkIfMatched(routePropsRef.path, cProps.location).isExact
        ? componentOrRender(cProps)
        : routePropsRef.childRoutesAsChildren
        ? componentOrRender({
            children: ChildSwitchRoutes,
            ...cProps,
          })
        : ChildSwitchRoutes;
    };
    // console.log('routeProps.name:: ', routeProps.name);
    const currentRoute = (
      <Route
        {...routeProps}
        render={props => routesOrCompoenent(routeProps, props)}
      />
    );
    return currentRoute;
  }
}

CustomRoute.defaultProps = {
  childRoutesAsChildren: true,
};
