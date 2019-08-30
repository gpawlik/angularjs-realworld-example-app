import { createSelector } from 'reselect';

import { initialState } from './reducer';

const getState = state => state.articles || initialState;

export const getRating = createSelector(
    getState,
    state => state.rating
);

export const getRatingById = createSelector(
    [getRating, (_, id) => id],
    (rating, id) => rating[id] || 0
);
