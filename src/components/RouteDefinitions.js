import Home from './Home';
import Users from './Users';
import About from './About';
import UserDetail from './UserDetail';
import { Route, Switch } from 'react-router-dom';
import { HOME_PATH, USERS_PATH, USER_PATH, ABOUT_PATH } from '../services/constants';

const RouteDefinitions = () => {
  return <Switch>
    <Route exact strict path={USERS_PATH}>
      <Users />
    </Route>
    <Route exact strict path={USER_PATH}>
      <UserDetail />
    </Route>
    <Route exact strict path={ABOUT_PATH}>
      <About />
    </Route>
    <Route exact strict path={HOME_PATH}>
      <Home />
    </Route>
  </Switch>
};

export default RouteDefinitions;