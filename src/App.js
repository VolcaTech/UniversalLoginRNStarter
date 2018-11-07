import React from 'react';
import { Navigation } from 'react-native-navigation';
import ethers, {Wallet} from 'ethers';
import EthereumIdentitySDK from 'universal-login-monorepo/universal-login-sdk';
import IntroScreen from './IntroScreen';

Navigation.registerComponent('IntroScreen', () => IntroScreen);


// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
// 	this._testEthers();
// 	this.startApp();
//     }

//     async _testEthers() {
// 	const privateKey = await ethers.Wallet.createRandom().privateKey;
// 	console.log({privateKey});
// 	const jsonRpcUrl = "http://localhost:18545";
// 	const relayerUrl = "http://localhost:3311";
// 	const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);	
// 	const sdk = new EthereumIdentitySDK(relayerUrl, provider);
	
// 	sdk.start();
// 	console.log("SDK INITED");

// 	const result = await sdk.create(
// 	    'alexxxx2.mylogin.eth'
// 	);
// 	console.log("identityAddress: " + result);	
//     }


//    startApp(root, params = null) {
Navigation.startSingleScreenApp({
    screen: {
        screen: 'IntroScreen', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
            orientation: 'portrait',
            //screenBackgroundColor: '#242836',
            // navBarHidden: true,
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
});
//     }
// }

