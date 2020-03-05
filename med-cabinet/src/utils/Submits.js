import axiosWithAuth from './axiosWithAuth';
//button functions to add/delete favorites

export const addSubmit = (e, elem) => {
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
}

export const delSubmit = (e, elem) => {
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
}