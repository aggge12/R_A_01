
import React, { Component } from 'react';
import ApiList from '../containers/ApiList.js'

class ScreenOne extends Component {
  render() {
    return (
      <div class="App">
      <br/>
        <h3>Lista med drycker!</h3>
        <br/>
        <ApiList user={this.props.user}/>
      </div>
    );
  }
}

export default ScreenOne;
