//test reducer to initialize store

const initialState = {
    favorites: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      case "DELETE_FAVORITE":
        return {
          ...state,
          favorites: [...state.favorites.filter(item => item !== action.payload)]
        };
      default:
        return state;
    }
  };