import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers 
import userReducer  from './reducers/userReducer';

 
const rootReducer = combineReducers({

    user: userReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunk));

export  const store = createStore(rootReducer,middleware);