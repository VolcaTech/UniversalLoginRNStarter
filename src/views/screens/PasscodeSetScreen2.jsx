import React from 'react';
import { View, Text, } from 'react-native';
import CodePin from 'react-native-pin-code'
import styles from './styles';


class PasscodeSetScreen2 extends React.Component {
    state = {
        code: "",
    }

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
                        text='Enter your pin'
                        ref={ref => this.ref = ref}
                        pinStyle={{ backgroundColor: 'white', borderWidth: 1 }}
                        underlineColorAndroid="white"
                        checkPinCode={(code, callback) => {
                            this.setState({ code })
                            callback(true);
                        }}
                        success={() => this.props.navigator.push({ screen: 'dailywallet.PasscodeSetScreenConfirm', passProps: { code: this.state.code } })}
                        onTextChange={code => this.setState({ code })}
                        autoFocusFirst={true}
                        obfuscation={true}
                    />
                </View>
            </View>
        )
    }
}

export default PasscodeSetScreen2