import { actions as appActions } from 'DailyWallet/src/actions/app';


function appRoot(state = 'Splash', action) {
    console.log("REDUCER: ", action)
    let nextState;
    switch (action.type) {
    case appActions.CHANGE_ROOT:
	nextState = action.payload.root;
	break;
    default:
	nextState = state;
    }
    return nextState;
}


export default appRoot;
