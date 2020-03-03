export const addSubmit = (e, props, elem) => {
    e.preventDefault();
    //post here
    props.addFavorite(elem)
}

export const delSubmit = (e, props, elem) => {
    e.preventDefault();
    //delete here
    props.removeFavorite(elem)
}