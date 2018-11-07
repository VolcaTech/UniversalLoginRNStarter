import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, } from 'react-native';
import { deleteWallet } from './../../actions/wallet'
import styles from './styles';


class BalanceScreen extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    _deleteWallet() {
        this.props.deleteWallet()
        this.props.navigator.push({ screen: 'dailywallet.IntroScreen' })
    }

    render() {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.centeredFlex}>
                    <Text style={styles.title}>Balance Screen</Text>
                </View>
                <View style={styles.centeredFlex}>
                    <Text style={styles.balance}>Your Balance is $0.00</Text>
                    <Text style={styles.deleteWallet} onPress={() => {
                        this._deleteWallet()
                    }}>Delete wallet</Text>
                </View>
                <View style={styles.centeredFlex}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                        <Text style={styles.buttonText} onPress={() => this.props.navigator.push({ screen: 'dailywallet.SendScreen' })}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        wallet: state.data.wallet || ''
    }
}

export default connect(mapStateToProps, { deleteWallet })(BalanceScreen)