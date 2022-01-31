import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import userReducer from './reducers/userReducer';
import houseReducer from './reducers/houseReducer';
import feedbackReducer from './reducers/feedbackReducer';

const rootReducer = combineReducers({
  user: userReducer,
  house: houseReducer,
  feedback: feedbackReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middleware);
