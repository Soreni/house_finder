import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers 
import userReducer  from './reducers/userReducer';
import houseReducer from './reducers/houseReducer';

 
const rootReducer = combineReducers({

    user: userReducer,
    house: houseReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunk));

export  const store = createStore(rootReducer,middleware);