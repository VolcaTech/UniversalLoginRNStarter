import { changeAppRoot } from 'DailyWallet/src/actions/app';



function configureStore(store) {  
    return () => {
	const state = store.getState();			
	
	// set root screen (add wallet screen or home screen with tabs)
	let root = 'IntroScreen';
 	if (state.data.wallet.address !== '') {
	    root = 'BalanceScreen';
	} 
	store.dispatch(changeAppRoot(root));
   };
}

export default configureStore;
