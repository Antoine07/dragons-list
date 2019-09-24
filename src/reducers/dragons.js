import { ADD_DRAGON, REMOVE_DRAGON } from '../constants/constants';

const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla",
    ],
    count: 4,
    message: null
};

const reducerDragon = (state = stateInit, action = {}) => {
    let dragons = [];

    switch (action.type) {

        case ADD_DRAGON:

            const dragon = action.dragon;

            if ( state.dragons.includes(dragon) === true ) {
                
                return { 
                    ...state, 
                    message: `Le dragon ${dragon} existe déjà` 
                };
            }

            dragons = [...state.dragons, action.dragon];
            const count = dragons.length;

            return {
                ...state,
                dragons: dragons,
                count: count,
                message: null
            };

        case REMOVE_DRAGON:

            dragons = state.dragons.filter(dragon => dragon != action.dragon);

            return { 
                ...state, 
                dragons, 
                message : `La suppression du dragon : ${action.dragon} c'est bien passé` 
            }

        default:
            return state;
    }
    return state;
}

export default reducerDragon;