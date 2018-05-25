
import React, { Component } from 'react';
import ExtApiResult from '../containers/ExtApiResult.js'
import ApiList from '../containers/ApiList.js'

class ScreenOne extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-3">
        <br/>
          <div class="col-sm-6 center">
            <ExtApiResult/>
          </div>
        </div>
        <br/>
        <div class="col-sm-6">
          <div class="col-sm-12">
          <br/>
            <h3>Lista med drycker!</h3>
            <br/>
            <ApiList user={this.props.user}/>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default ScreenOne;
