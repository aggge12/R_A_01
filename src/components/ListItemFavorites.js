import React, { Component } from 'react';
import {getProduct,removeFavorite} from '../ApiFunctions';

class ListItemFavorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        console.log("this.props.data");
        console.log(this.props.data);
        getProduct(this.props.data.productid).then((response) => {
            console.log(response);
            this.setState({ 
            data: response.data,
            })
        })
    }

    componentDidUpdate() {
            console.log("this.props.data");
            console.log(this.props.data);
            if (this.props.data.productid !== this.state.data.id)
            {
                getProduct(this.props.data.productid).then((response) => {
                    console.log(response);
                    this.setState({ 
                    data: response.data,
                    })
                })
            }

    }

    ButtonClicked = () => {
        console.log(this.state.data);
        removeFavorite(this.props.data.userid, this.props.data.productid).then((response) => {
            if (response.data === 200){
                this.props.Rerender();
            }
        })
    } 
  render() {
    return (
      <div>
        <p>Namn : {this.state.data ? this.state.data.name : ""}</p>
        <p>Kategori : {this.state.data ? this.state.data.category : ""}</p>
        <p>Typ : {this.state.data ? this.state.data.type : ""}</p>
        <button class="btn btn-danger" onClick={this.ButtonClicked}>Ta bort från favoriter</button>
        <hr/>
      </div>
    );
  }
}

export default ListItemFavorites;
