export function getPost(id = '') {
    return (dispatch) => {
        dispatch({
            type: 'GET_POST_REQUEST'
        });

        fetch('https://frontcamp-khvainitski.herokuapp.com/api/posts/' + id).then(response => response.json())
            .then((data) => {
                dispatch({
                    type: 'GET_POST_SUCCESS',
                    payload: data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'GET_POST_ERROR',
                    payload: error
                })
            });
    }
}