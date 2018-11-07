import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, } from 'react-native';
import { Navigation } from 'react-native-navigation';
import CodePin from 'react-native-pin-code'
import { derivePkFromKeystore, deriveAddressFromPk } from './../../services/keystoreService';
import styles from './styles';


class PincodeOnSendScreen extends React.Component {
    state = {
        step: '1'
    }

    static navigatorStyle = {
        navBarHidden: true,
    }

    render() {
        const wallet = this.props.wallet
        const address = wallet.address
        const keystore = wallet.keystore
        return (
            <View style={styles.screenContainer}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ paddingTop: 30, color: 'blue', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Send Unlock Screen</Text>
                    <Text style={{ paddingTop: 30, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Enter your 4-digit passcode</Text>
                    <View style={{ alignItems: 'center' }}>
                        <CodePin
                            number={4}
                            keyboardType='numeric'
                            ref={ref => this.ref = ref}
                            pinStyle={{ backgroundColor: 'white', borderWidth: 2 }}
                            underlineColorAndroid="white"
                            checkPinCode={async (code, callback) => {
                                const password = code
                                let privateKey; 
                                let derivedAddress = '';
                                try {
                                    privateKey = await derivePkFromKeystore({ keystore, password })
                                    derivedAddress = await deriveAddressFromPk({ privateKey })
                                } catch (e) {
                                    console.log('callback error: ', e)
                                }
                                callback(address.toUpperCase() === derivedAddress.toUpperCase())

                            }}
                            success={() => this.props.navigator.push({ screen: 'dailywallet.ShareLinkScreen', passProps: { amount: this.props.amount } })}
                            error="Wrong pin"
                            autoFocusFirst={true}
                            obfuscation={true}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        wallet: state.data.wallet || ''
    }
}

export default connect(mapStateToProps)(PincodeOnSendScreen)