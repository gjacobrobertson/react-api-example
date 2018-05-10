import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

export default history => {
  const reducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });

  const router = routerMiddleware(history);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(router, thunk));

  return createStore(reducer, enhancer);
};
