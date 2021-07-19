import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';
import RouteDefinitions from './RouteDefinitions';
import { HOME_PATH, USERS_PATH, ABOUT_PATH } from '../services/constants';

const styles = () => ({
  appBar: {
    background: '#2E3B55'
  }
});

const NavigationBar = (props) => {
  const { classes } = props;
  return <Router>
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <NavItem text='Home' link={HOME_PATH} />
        <NavItem text='Users' link={USERS_PATH} style={{ flex: 1 }} />
        <NavItem text='About' link={ABOUT_PATH} />
      </Toolbar>
    </AppBar>
    <RouteDefinitions />
  </Router>;
};

export default withStyles(styles)(NavigationBar);