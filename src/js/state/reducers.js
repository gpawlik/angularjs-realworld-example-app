import { combineReducers } from 'redux';

import { articlesReducer as articles } from '../article/state/reducer';

// Use this function to combine other reducers in the future.
export const rootReducer = combineReducers({
  articles,
});
