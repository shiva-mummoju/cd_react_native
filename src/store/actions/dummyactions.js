import { CHANGE_DATA } from './actionTypes'

export const changeData = (newData) => {
    return {
        type: CHANGE_DATA,
        newData: newData
    };
};