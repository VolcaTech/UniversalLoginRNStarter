//import Config from 'react-native-config';
import web3Service from './web3Service';
import EthTx from 'ethereumjs-tx';
import Wallet from 'ethereumjs-wallet-react-native';


export async function generateOrImportKeystore({password, privateKey=null}) {
    // use private key if it's given, otherwise generate wallet
    let wallet; 
    if (privateKey) {
	wallet = await Wallet.fromPrivateKey(new Buffer(privateKey, 'hex'));
    } else {
	wallet = await Wallet.generate();
    }	
    
    // // ensure it doesnt already exist
    // // let the UI update with a loading spinner...
    const params = {
	    n: 1024 // todo, use 65536 for better security
    };    
    const keystore = JSON.stringify(await wallet.toV3(password, params));
    const address = wallet.getChecksumAddressString();
    return { keystore, address };    
}


export async function generateKeyPair() {
    // use private key if it's given, otherwise generate wallet
    const wallet = await Wallet.generate();
    
    // // ensure it doesnt already exist
    // // let the UI update with a loading spinner...
    const address = wallet.getChecksumAddressString();
    const privateKey = wallet.getPrivateKey().toString('hex');
    return { privateKey, address };    
};


export async function derivePkFromKeystore({keystore, password}) {
    const wallet = await Wallet.fromV3(keystore, password);
    const pk = wallet.getPrivateKey();
    return pk;
}

export async function deriveAddressFromPk({privateKey}) {
    const wallet = await Wallet.fromPrivateKey(privateKey);
    const address = wallet.getAddressString();
    return address;
}

export function signTx({privateKey, txParams}) {
    
    const tx = new EthTx(txParams);
    tx.sign(new Buffer(privateKey, 'hex'));
    
    privateKey = null;
    const signedTx = `0x${tx.serialize().toString('hex')}`;
    return signedTx;
}


export async function sendTx({txParams, keystore, password}) {
    const web3 = web3Service.getWeb3();
    const txCount = await web3.eth.getTransactionCountPromise(txParams.from, "latest");
    // add nonce (tx count) to transaction params    
    txParams = {
	...txParams,
	nonce: txCount,
	//chainId: parseInt(3) // defence from replay attack to another chain
    };
    const signedTx = await signTx({txParams, keystore, password });
    
    // returns txHash
    return web3.eth.sendRawTransactionPromise(signedTx);
}
