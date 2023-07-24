import axios from "axios"

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const addFav = (character) => {
  const endPoint = 'http://localhost:3001/rickandmorty/fav'
  return (dispatch)=>{
    axios.post(endPoint, character)
    .then(({data})=>{
      return dispatch({
        type: ADD_FAV,
        payload: data
      })
    })
  };
};

const removeFav = (id) => {
  const endPoint = `http://localhost:3001/rickandmorty/fav/${id}`
  return (dispatch)=>{
    axios.delete(endPoint).then(({data})=>{
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data
      })
    })
  }
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  addFav,
  removeFav,
  filterCards,
  orderCards,
};
