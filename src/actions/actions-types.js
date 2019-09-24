import {
    ADD_DRAGON
} from '../constants/constants';


export const add = (dragon) => {
    return {
        type: ADD_DRAGON,
        dragon
    }
};

// export const remove = () => {
//     return {
//         type: REMOVE_DRADON
//     }
// };