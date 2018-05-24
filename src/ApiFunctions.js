import axios from 'axios';


export const loginUser = (uName, pWord) => {
    try {
      return axios.get('https://finditappapi.azurewebsites.net' + '/User/GetUserID?username='+uName+'&password='+pWord+'');
    } catch (error) {
      console.error(error);
    }
  };

  export const getProducts = () => {
    try {
      return axios.get('https://finditappapi.azurewebsites.net' + '/Product/GetAllProducts/');
    } catch (error) {
      console.error(error);
    }
  };


  export const saveFavorite = (userid, productid) => {
    try {
      return axios.get('http://localhost:60332/Values/SaveNew?userid='+userid+'&productid='+productid);
    } catch (error) {
      console.error(error);
    }
  };

  
  export const getProduct = (id) => {
    try {
      return axios.get('http://localhost:60332/Values/GetProduct?id='+id);
    } catch (error) {
      console.error(error);
    }
  };

  export const getFavorites = (id) => {
    try {
      return axios.get('http://localhost:60332/Values/getFavorites?id='+id);
    } catch (error) {
      console.error(error);
    }
  };


  export const removeFavorite = (userid,productid) => {
    try {
      return axios.get('http://localhost:60332/Values/RemoveFavorite?userid='+userid+'&productid='+productid);
    } catch (error) {
      console.error(error);
    }
  };
  
