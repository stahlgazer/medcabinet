// ACTIONS HERE TO ADD OR REMOVE A FAVORITE STRAIN


//individual strain called elem
export function addFavorite(elem) {
    return { type: "ADD_FAVORITE", payload: elem };
  }
  
  export function deleteFavorite(favorite) {
    return { type: "DELETE_FAVORITE", payload: favorite };
  }
  
// export function updateUser(user) {
//     return { type: "UPDATE_USER", payload: user }
// }