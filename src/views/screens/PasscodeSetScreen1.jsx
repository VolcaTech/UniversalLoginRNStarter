import React from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import styles from './styles';


class IntroScreen extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    render() {
        return (
            <View style={styles.screenContainer}>  
                <View style={styles.centeredFlex}>
                    <Text style={styles.title}>Passcode Set Screen (1)</Text>
                </View>
                <View style={styles.centeredFlex}>
                    <Text style={styles.infoText}>Enter a four-digit passcode. You'll need to enter it every time you send money.</Text>
                </View>
                <View style={styles.centeredFlex}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigator.push({screen: 'dailywallet.PasscodeSetScreen2'})}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default IntroScreen;
