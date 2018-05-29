import React, { Component } from 'react';
import {getProduct,removeFavorite} from '../ApiFunctions';

class ListItemFavorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            loading: true,
        };
    }
    componentDidMount() {
        console.log("this.props.data");
        console.log(this.props.data);
        getProduct(this.props.data.productid).then((response) => {
            console.log(response);
            this.setState({ 
            data: response.data,
            loading: false,
            })
        })
    }

    componentDidUpdate() {
            if (this.state.data && this.state.data.id && this.props.data.productid !== this.state.data.id)
            {
                if(this.state.loading !== true)
                {
                    this.setState({ 
                        loading: true,
                    })
                }
  
                getProduct(this.props.data.productid).then((response) => {
                    console.log(response);
                    this.setState({ 
                    data: response.data,
                    loading: false,
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
        <div>
        {this.state.loading? <i class="fas fa-spin fa-spinner"></i> : ""
        }
        </div>  
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
