import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  render() {
    const styles = {
      root: {
        flexGrow: 1,
      },
      flex: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      }
    };

    console.log(this.props)
    return(
      // <div>
      //   <header>{ this.props.appName } {this.props.children}</header>
      //   <hr />
      // </div>

      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={styles.flex}>
              {this.props.appName} {this.props.children}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
