
import { changeData , CHANGE_DATA} from './../actions/index';

const initialState = {
    data: 'data in the initial state. Redux',
 
}

const reducer = (state = initialState , action) => {
    switch(action.type) {

        // for different actions do different stuff
        case CHANGE_DATA:
            return {
                ...state,
                data: state.data + action.newData
            }


        default: 
            return state;
    }

}


export default reducer;