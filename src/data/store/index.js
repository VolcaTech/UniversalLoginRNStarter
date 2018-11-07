import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from 'DailyWallet/src/data/reducers';
import createConfigStoreFunc from './configureStore';


const enhancers = compose(applyMiddleware(thunk));
const createPersistConfig = (key, version=0) => ({
    storage,
    version,
    keyPrefix: 'DAILY_v01_',
    key,
    debug: false, 
});


const persistedReducer = combineReducers({
    ...reducers, 
    data: persistReducer(createPersistConfig('data', 1), reducers.data)
    // orm: persistReducer(createPersistConfig('orm', 1), reducers.orm),
    // config: persistReducer(createPersistConfig('config', 0), reducers.config),
    // marketData: persistReducer(createPersistConfig('marketData', 0), reducers.marketData)
})


const store = createStore(persistedReducer, undefined, enhancers);


const configureStoreFunc = createConfigStoreFunc(store);
persistStore(store, null, configureStoreFunc);


export default store;
