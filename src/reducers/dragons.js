import { ADD_DRAGON, REMOVE_DRAGON } from '../constants/constants';

const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla",
        "Ludovic"
    ],
    count: 4
};

const reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
            // TODO
            return 
        default:
            return state;
    }
    return state;
}

export default reducerDragon;