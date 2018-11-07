# UniversalLoginRNStarter
React Native Starter App for [UniversalLoginsSDK](https://github.com/UniversalLogin/UniversalLoginSDK).  


## Requirements  
- NodeJS v10.12.0
- Yarn 1.10.1  
    
This starter has been tested only on OS X.

## Dependencies
This starter uses `react-native-navigation` (v1) for navigation.  
`rn-nodeify` package allows to use node core modules. [Learn more](https://github.com/tradle/rn-nodeify).
  
Native libs for secure and fast crypto: 
- `react-native-secure-randombytes`
- `react-native-fast-crypto`

## Deployment

### Setup Relayer Server and Testnet Node

Run Relayer Server and Testnet Node in separate terminal window by following the instructions to run example - https://github.com/UniversalLogin/UniversalLoginSDK

### RN App

New to React Native? Here's a helpful introduction: https://facebook.github.io/react-native/docs/getting-started.html

#### iOS

1.  Clone the GitHub repository to your machine.
2.  Run `yarn` to get all of the packages required.
3.  Run `./postinstall-npm-script.sh`.
4.  Run `npm run start --reset-cache` to start the bundler.
5.  Open ios directory in Xcode.
6.  Run the project by clicking the play button.

#### Android

1.  Clone the GitHub repository to your machine.
2.  Run `yarn` to get all of the packages required.
3.  Run `./postinstall-npm-script.sh`
4.  Run `npm run start --reset-cache` to start the bundler.
5.  Open android directory on Android Studio.
6.  Run the project by clicking the play button.

## Hacking
Run example and create an identity by following instructions - [tutorial](https://github.com/EthWorks/UniversalLoginSDK/blob/master/Tutorial.md).  
After that, you can deploy and connect the app to identity contract.  
Basically, this react-native starter mimics the `universal-login-boilerplate` functionality.


## License

UniversalLoginRNStarter is released under the [MIT License](https://opensource.org/licenses/MIT).
