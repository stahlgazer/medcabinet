import axiosWithAuth from './axiosWithAuth';

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
    props.removeFavorite(elem)
}