import { AppBar, Toolbar, Typography, Container  } from '@material-ui/core';

function Footer() {
  return (
      <AppBar position="static" color="primary" style={{marginTop: 'calc(5% + 60px)', bottom: 0, background: '#2E3B55', marginLeft: 'auto', marginRight: 'auto'}}>
        <Container maxWidth="md">
          <Toolbar >
            <Typography variant="body1" color="inherit">
              © 2019 GAJENDRA USER MANAGEMENT OY
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
};

export default Footer;