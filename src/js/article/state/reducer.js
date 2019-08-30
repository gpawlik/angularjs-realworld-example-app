import { UPDATE_RATING } from './constants';

export const initialState = {
    rating: {},
};

export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RATING: {
            const { id, rating } = action.payload;
            return { ...state, rating: { ...state.rating, [id]: rating } };
        }

        default:
            return state;
    }
};
