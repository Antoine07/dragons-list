import {
    ADD_DRAGON,
    REMOVE_DRAGON
} from '../constants/constants';


export const add = (dragon) => {
    return {
        type: ADD_DRAGON,
        dragon
    }
};

export const remove = (dragon) => {
    return {
        type: REMOVE_DRAGON,
        dragon
    }
};