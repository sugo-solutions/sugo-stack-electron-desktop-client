import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar > </Navbar>
        <Main > </Main>
      </div>
    );
  }
}
