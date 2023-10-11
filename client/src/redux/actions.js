import axios from "axios"

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const addFav = (character) => {
  const endPoint = '/rickandmorty/fav'
  return async (dispatch)=>{
    try {
      const {data} = await axios.post(endPoint, character)
      dispatch({
        type: ADD_FAV,
        payload: data
      })
    } catch (error) {
      console.log({error: error.message});
    }
  };
};

const removeFav = (id) => {
  const endPoint = `/rickandmorty/fav/${id}`
  return async (dispatch)=>{
    try {
      const {data} = await axios.delete(endPoint)
        dispatch({
          type: 'REMOVE_FAV',
          payload: data
        })
    } catch (error) {
      console.log(console.error(error));
    }
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
