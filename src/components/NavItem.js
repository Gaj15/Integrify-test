
import { Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  linkStyle: {
    padding: '10px',
    color: '#fdfdfd',
  },
});

const NavItem = (props) => {
  return <Typography variant="h6" style={props.style} >
    <Link href={props.link} color="textPrimary" underline='none' className={props.classes.linkStyle}>
      {props.text}
    </Link>
  </Typography>
}

export default withStyles(styles)(NavItem);