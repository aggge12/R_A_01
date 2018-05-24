import React, { Component } from 'react';

class EnKnapp extends Component {
  render() {
    return (
      <div>
        <button className="btn-test" style={{marginBottom: 2 + 'em'}}>{this.props.aText}</button>
      </div>
    );
  }
}

export default EnKnapp;
