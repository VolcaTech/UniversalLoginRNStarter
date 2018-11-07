import React from 'react';
import { connect } from 'react-redux';
import { View, Text, } from 'react-native';
import CodePin from 'react-native-pin-code'
import { createWallet } from './../../actions/wallet'
import styles from './styles';


class PasscodeSetScreenConfirm extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.centeredFlex}>
                    <Text style={styles.title}>Passcode Set Screen (2)</Text>
                </View>
                <View style={styles.pinContainer}>
                    <CodePin
                        keyboardType='numeric'
                        number={4}
                        text="Confirm pin code"
                        pinStyle={{ backgroundColor: 'white', borderWidth: 1 }}
                        underlineColorAndroid="white"
                        checkPinCode={(code, callback) => callback(code === this.props.code)}
                        success={() => {
                            this.props.createWallet(this.props.code)
                            this.props.navigator.push({ screen: 'dailywallet.BalanceScreen' })
                        }
                        }
                        error="Codes do not match"
                        autoFocusFirst={true}
                        obfuscation={true}
                    />
                </View>
            </View>
        )
    }
}

export default connect(null, { createWallet })(PasscodeSetScreenConfirm)