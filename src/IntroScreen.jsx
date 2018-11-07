import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    title: {
        paddingTop: 30,
        color: 'blue',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginTop: 20,
        width: 200,
        height: 50,
        borderWidth: 2
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        color: 'black'
    },
    centeredFlex: {
        flex: 1,
        alignItems: 'center'
    }
});


class IntroScreen extends React.Component {


    
    render() {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.centeredFlex}>
                    <Text style={styles.title}>Type an username</Text>
                </View>
                <View style={styles.centeredFlex}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigator.push({ screen: 'dailywallet.PasscodeSetScreen1' })}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default IntroScreen;
