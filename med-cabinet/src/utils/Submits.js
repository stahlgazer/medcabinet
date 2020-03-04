import axiosWithAuth from './axiosWithAuth';
//button functions to add/delete favorites

export const addSubmit = (e, props, elem) => {
    e.preventDefault();
    //post here
    axiosWithAuth()
    .post(`/users/${localStorage.getItem('ID')}/favs`, elem)
    .then(response => {
      console.log("added fav:", response.data);
    })
    .catch(error => {
      console.log("added fav error:", error);
    });
    //action here
    // props.addFavorite(elem)
}

export const delSubmit = (e, props, elem) => {
    e.preventDefault();
    //delete here
    axiosWithAuth()
    .delete(`/favs/${elem.id}`, elem)
    .then(response => {
      console.log("deleted fav:", response.data);
    })
    .catch(error => {
      console.log("deleted fav error:", error);
    });
    //action here
    // props.deleteFavorite(elem)
}