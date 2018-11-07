import {changeAppRoot} from './app';
import {generateOrImportKeystore} from './../services/keystoreService';

export const actions = {
    CREATE_WALLET: 'CREATE_WALLET',
    DELETE_WALLET: 'DELETE_WALLET',
};


export function createWallet(password) {
    return async (dispatch, getState) => {
        const {address, keystore} = await generateOrImportKeystore({password})
        dispatch({
            type: 'CREATE_WALLET',
            payload: {keystore, address}
        })
        dispatch(changeAppRoot('BalanceScreen'))
    };
}

export function deleteWallet() {
    return {
        type: 'DELETE_WALLET',
        payload: null
    }
}


