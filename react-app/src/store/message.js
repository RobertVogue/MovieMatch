const STORE_MESSAGE = 'message/storeMessage';

const storeMessage = (message) => ({
    type: STORE_MESSAGE,
    message
})

export const messageStore = (message) => (dispatch) => {
    dispatch(storeMessage(message))
};

const initialState = {};
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_MESSAGE:
            return action.message;
        default:
            return state;
    }
};

export default messageReducer;
