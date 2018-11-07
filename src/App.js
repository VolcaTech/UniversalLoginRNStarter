import React from 'react';
import { Navigation } from 'react-native-navigation';
import IntroScreen from './IntroScreen';

Navigation.registerComponent('IntroScreen', () => IntroScreen);

	
Navigation.startSingleScreenApp({
    screen: {
        screen: 'IntroScreen', // unique ID registered with Navigation.registerScreen
	title: 'Universal Login Starter',
        navigatorStyle: {
            orientation: 'portrait',
            //screenBackgroundColor: '#242836',
            // navBarHidden: true,
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
});

