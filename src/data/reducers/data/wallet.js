import {
    actions
} from './../../../actions/wallet'

const initialState = {
    address: '',
    keystore: ''
}

export function wallet(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_WALLET:
            const { address, keystore } = action.payload
            return { address, keystore }
        case actions.DELETE_WALLET:
            return initialState
        default:
            return state
    }
}