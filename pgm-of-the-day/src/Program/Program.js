import React, { Component } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

// this example talks about communication from child to parent with event
class Program extends Component{
  componentWillMount(){
    console.log("Component Will Mount");
  }

  render(){
    return(
      <div>
        <Card className='card-3'>
          <CardContent>
            <Typography color="textSecondary">
              Programs of the Day
            </Typography>
            <Typography variant="headline" component="h2">
              {this.props.name}
            </Typography>
            <Typography color="textSecondary">
            #{this.props.id}
            </Typography>
            <Typography component="p">
              {this.props.host} 
            </Typography>
          </CardContent>
          <CardActions align="center">
            <Button 
              variant="contained" 
              color="primary" 
              className="Align-center"
              onClick={this.props.onUpdateWatchList}>
              { this.props.isInWatchList? 'Added': 'Add to Watchlist'}
            </Button>
          </CardActions>
        </Card>
      </div> 
    )
  }
}

export default Program;