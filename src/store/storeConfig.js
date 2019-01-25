import { createStore , combineReducers } from 'redux';

import reducer from './reducers/root';
import postReducer from './reducers/posts'

const rootReducer = combineReducers({
    reducer: reducer,
    posts: postReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}


export default configureStore;