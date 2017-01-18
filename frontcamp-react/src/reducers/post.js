const initialState = {
    fetching: true,
    data: []
};

export default function post(state = initialState, action) {
    switch (action.type) {
        case 'GET_POST_REQUEST':
            return { ...state, fetching: true }

        case 'GET_POST_SUCCESS':
            return { ...state, data: action.payload, fetching: false }

        default:
            return state;
    }
}