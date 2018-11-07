import React from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import ethers, {Wallet} from 'ethers';
import EthereumIdentitySDK from 'universal-login-monorepo/universal-login-sdk';


class IntroScreen extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    view: 'login',
	    username: '',
	    error: null
	};
	this.provider = new ethers.providers.JsonRpcProvider('http://localhost:18545');
	this.sdk = new EthereumIdentitySDK('http://localhost:3311', this.provider);
    }

    async componentDidMount() {
	await this.sdk.start();
    }

    componentWillUnmount() {
	this.subscription.remove();
	this.sdk.stop();
    }

    _getLabelStub() {
	return {
	    ipAddress: '192...',
	    name: 'React Native',
	    city: '',
	    time: '',
	    os: 'React Native',
	    version: ''
	};
    }    
    
    async _connect(username) {
	const jsonRpcUrl = "http://localhost:18545";
	const relayerUrl = "http://localhost:3311";
	const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);	
	const sdk = new EthereumIdentitySDK(relayerUrl, provider);
	
	const name = `${username}.mylogin.eth`;
	const identityAddress = await this.sdk.identityExist(name);
	this.identityAddress = identityAddress;
	if (identityAddress) {
	    const privateKey = await this.sdk.connect(identityAddress, this._getLabelStub());
	    this.privateKey = privateKey;
	    const { address } = new Wallet(privateKey);
	    // this.subscription = this.sdk.subscribe('KeyAdded', identityAddress, (event) => {
	    // 	if (event.address === address) {
	    // 	    this.setState({view: 'connected'});
	    // 	}
	    // });
	} else {
	    throw new Error(`Identity ${name} does not exist.`);
	}
    }

    async _onSubmit() {
	this.setState({error: null});	
	try { 
	    await this._connect(this.state.username);
	} catch (err) {
	    console.log({err})
	    this.setState({error: err.message});
	}
    }

    _renderLoginForm() {
	return (
	    <View>
                <View style={styles.row}>
                    <Text style={styles.title}>Type an username</Text>
                </View>
                <View style={styles.row}>
		  <View style={{flexDirection: 'row'}}>
		    <View style={{flex: 1}}>
		      <TextInput
			 style={styles.textInput}
			 onChangeText={(username) => this.setState({username})}
			placeholder="e.g. alice"
			value={this.state.username}
			/>
		    </View>
		    <View style={{flex: 1}}>
		      <Text style={{fontSize: 20, marginTop:10}}>.mylogin.eth</Text>
		    </View>
		  </View>
		</View>
                <View style={styles.row}>
		  <Button title="Connect" onPress={this._onSubmit.bind(this)}/>
                </View>
                <View style={styles.row}>
		  <Text style={styles.error}>{this.state.error}</Text>
                </View>		
	    </View>
	);
    }
    
    _renderConnectedView() {
	return (
	    <Text>Connected!</Text>
	);
    }

    _renderContent() {
	if (this.state.view === 'login') {
	    return this._renderLoginForm();
	} else if (this.state.view === 'connected') {
	    this._renderConnectedView();
	}
    }
    
    render() {
        return (
            <View style={styles.screenContainer}>
	      {	this._renderContent() }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textInput: {
	height: 40,
	borderColor: 'gray',
	borderWidth: 1
    },
    // screenContainer: {
    //     flex: 1,
    //     // flexDirection: 'column',
    //     // justifyContent: 'space-between',
    //     backgroundColor: '#fff'
    // },
    title: {
        paddingTop: 30,
        color: 'blue',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
 	padding: 10
    },
    error: {
	color: 'red'
    }
});


export default IntroScreen;
