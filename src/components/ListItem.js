import React, { Component } from 'react';

class ListItem extends Component {
    ButtonClicked = () => {
        this.props.ClickFunction(this.props.user, this.props.data.id);
    } 
  render() {
    return (
      <div>
        <p>Namn : {this.props.data.name}</p>
        <p>Kategori : {this.props.data.category}</p>
        <p>Typ : {this.props.data.type}</p> {this.props.user !== 0?
        <button class="btn btn-primary" onClick={this.ButtonClicked}>Lägg till i favoriter</button>
        :
        ""
        }
        <hr/>
      </div>
    );
  }
}

export default ListItem;
