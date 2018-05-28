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
      return axios.get('https://apiforindapp.azurewebsites.net/Values/SaveNew?userid='+userid+'&productid='+productid);
    } catch (error) {
      console.error(error);
    }
  };

  
  export const getProduct = (id) => {
    try {
      return axios.get('https://apiforindapp.azurewebsites.net/Values/GetProduct?id='+id);
    } catch (error) {
      console.error(error);
    }
  };

  export const getFavorites = (id) => {
    try {
      return axios.get('https://apiforindapp.azurewebsites.net/Values/getFavorites?id='+id);
    } catch (error) {
      console.error(error);
    }
  };


  export const removeFavorite = (userid,productid) => {
    try {
      return axios.get('https://apiforindapp.azurewebsites.net/Values/RemoveFavorite?userid='+userid+'&productid='+productid);
    } catch (error) {
      console.error(error);
    }
  };
  
/// EXTERNAL APIS

export const getChuckChuckles = () => {
  try {
    return axios.get('https://api.chucknorris.io/jokes/random');
  } catch (error) {
    console.error(error);
  }
};

export const getCat = () => {
  try {
    return axios.get('https://apiforindapp.azurewebsites.net/Values/getCatAsync');
  } catch (error) {
    console.error(error);
  }
};