import { ADD_DRAGON, REMOVE_DRAGON } from '../constants/constants';

const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla",
    ],
    count: 4
};

const reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:

            const Dragons = [...state.dragons, action.dragon]

            return { 
                ...state, 
                dragons: Dragons,
                count : Dragons.length
             };

        default:
            return state;
    }
    return state;
}

export default reducerDragon;