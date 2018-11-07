// import Config from 'react-native-config';
const Promise = require('bluebird');
const erc20abi = require('human-standard-token-abi');
import generateWeb3WithProvider from './../utils/generateWeb3Provider';
const getTransactionReceiptMined = require('./../utils/getTransactionReceiptMined');


const Web3Service = function() {
    const WEB3_RPC_URL = 'https://ropsten.infura.io';
    const web3 = generateWeb3WithProvider(WEB3_RPC_URL);
    web3.eth.waitForMined = getTransactionReceiptMined;
    const tokenDct = {};
    
    const getWeb3 = () => {
	return web3;
    };

    
    const _initTokenContract = (tokenAddr) => {
    	const instance = web3.eth.contract(erc20abi).at(tokenAddr);
    	Promise.promisifyAll(instance.balanceOf, { suffix: 'Promise' });
	tokenDct[tokenAddr] = instance;
	return instance;
    };

    
    const getTokenContract = (tokenAddr) => {
	const instance = tokenDct[tokenAddr] || _initTokenContract(tokenAddr);
	// console.tron.log({instance});	
	return instance;
    };
    
    const getTokenBalance = (address, tokenAddr) => {
	const instance = getTokenContract(tokenAddr);
	return instance.balanceOf.callPromise(address);	
    };

    
    const getTokenTransferEvents = ({tokenAddress, address, fromBlock, toBlock, key}) => {
	const instance = getTokenContract(tokenAddress);
	
	const eventParams = {
	    fromBlock: fromBlock || 0,
	    toBlock: toBlock || 'latest'
	};

	return new Promise((resolve, reject) => {
	    instance.Transfer({[key]: address}, eventParams)
		.get((err, txs) => {
		    if (err) { reject(err); }
		    resolve(txs);
		});
	});
    };

    // api
    return {
	getWeb3,
	getTokenContract,
	getTokenBalance,
	getTokenTransferEvents
    };
};

const web3Service = Web3Service();
export default web3Service;
