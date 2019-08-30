import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer,
);

export const getStore = () => {
    const store = createStore(
        persistedReducer,
        // Integration with Redux DevTools
        // Reference: https://github.com/zalmoxisus/redux-devtools-extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const persistor = persistStore(store);

    return { store, persistor }
}
