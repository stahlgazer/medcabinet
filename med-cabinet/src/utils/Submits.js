import axiosWithAuth from './axiosWithAuth';

//button functions to add/delete favorites

export const addSubmit = (e, props, elem) => {
    e.preventDefault();
    //post here
    axiosWithAuth()
    .post(`/users/${localStorage.getItem('ID')}`, elem)
    .then(response => {
      console.log("user data put:", response.data);
    })
    .catch(error => {
      console.log("user data put:", error);
    });
    props.addFavorite(elem)
}

export const delSubmit = (e, props, elem) => {
    e.preventDefault();
    //delete here
    axiosWithAuth()
    .delete(`/users/${localStorage.getItem('ID')}`, elem)
    .then(response => {
      console.log("user data put:", response.data);
    })
    .catch(error => {
      console.log("user data put:", error);
    });
    props.removeFavorite(elem)
}