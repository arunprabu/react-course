import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let styles = {
  root: {
    flexGrow: 1,
  },
};

class Header extends Component {
  render() {
    

    return(
      // <div>
      //   <header>My App</header>
      //   <hr />
      // </div>

      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
