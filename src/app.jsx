import React from 'react';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello! This a desktop app developed by SuGo Development Team!</h2>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
