import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';


class SendScreen extends React.Component {
    state = {
        amount: ''
    }

    static navigatorStyle = {
        navBarHidden: true,
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.sendScreenContainer}>
                    <View>
                        <Text style={styles.title}>Send Screen</Text>
                    </View>
                    <View style={styles.sendInputContainer}>
                        <Text style={styles.sendScreenText}>You're sending $</Text>
                        <TextInput
                            keyboardType='numeric'
                            autoFocus={true}
                            style={{ ...styles.sendScreenText, width: 50 }}
                            onChangeText={(amount) => this.setState({ amount })}
                            value={this.state.amount}
                            underlineColorAndroid='black'
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                            <Text style={styles.buttonText} onPress={() => this.props.navigator.push({ screen: 'dailywallet.PincodeOnSendScreen', passProps: { amount: this.state.amount } })}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
        );
    }
}


export default SendScreen