import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {myFavorites: action.payload, allCharacters: action.payload}
    case REMOVE_FAV:
      return {myFavorites: action.payload, allCharacters:action.payload}
    case FILTER:
      if (action.payload === "all")
        return { ...state, myFavorites: [...state.allCharacters] };
      const filtered = [...state.allCharacters].filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    case ORDER:
      let ordered = [...state.myFavorites];
      if (action.payload === "A") {
        ordered = ordered.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        ordered = ordered.sort((a, b) => b.id - a.id);
      } else if (action.payload === "ABC") {
        ordered = ordered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "ZYX") {
        ordered = ordered.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        ordered = state.myFavorites;
      }
      return {
        ...state,
        myFavorites: ordered,
      };
    default:
      return state;
  }
};

export { rootReducer, initialState };
