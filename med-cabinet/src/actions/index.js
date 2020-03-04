// ACTIONS HERE TO ADD OR REMOVE A FAVORITE STRAIN

// need to connect to store
//individual strain called elem
export function addFavorite(elem) {
    return { type: "ADD_FAVORITE", payload: elem };
  }
  
  export function removeFavorite(elem) {
    return { type: "DELETE_FAVORITE", payload: elem };
  }
  
// export function updateUser(user) {
//     return { type: "UPDATE_USER", payload: user }
// }