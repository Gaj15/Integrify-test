import { Card, CardContent, Typography, Grid, Paper, Avatar, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReactRouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'transparent'
  },
  '[data-letters]::before': {
    content: 'attr(data-letters)',
    display: 'inline-block',
    fontSize: '1em',
    width: '2.5em',
    height: '2.5em',
    lineHeight: '2.5em',
    textAlign: 'center',
    borderRadius: '50%',
    background: 'plum',
    verticalAlign: 'middle',
    marginRight: '1em',
    color: 'white'
  }
}));
const UsersCardItem = ({ user }) => {
  const classes = useStyles();
  return <Grid item xs={4} key={user.id}>
    <Paper elevation={0} square={false} className={classes.paper}>
      <Card key={user.id} className={classes.root}>
        <CardContent>
          <Grid container justifyContent="center">
            <Avatar variant='circular' style={{ fontWeight: 'bold', height: '70px', width: '70px' }}>
              {user.name.substr(0, 1)}
            </Avatar>
          </Grid>
          <Typography variant='h6' gutterBottom>
            {user.name}
          </Typography>
          <Typography variant='subtitle2' style={{ color: '#9e9e9e' }} gutterBottom>
            @{user.username}
          </Typography>
          <Link href={user.website}>
            http://{user.website}
          </Link>
          <p></p>
          <Button component={ReactRouterLink} to={`/users/${user.id}`} variant='contained' color="primary" style={{ background: '#007bff' }}>
            MORE DETAILS
          </Button>
        </CardContent>
      </Card>
    </ Paper>
  </Grid>
};

export default UsersCardItem;