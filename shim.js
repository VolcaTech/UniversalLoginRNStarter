/* eslint-disable */
if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (var p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

process.browser = false;
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === 'boolean' && __DEV__;
process.env['NODE_ENV'] = isDev ? 'development' : 'production';
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : '';
}

// ethereum-wallet-react-native
// https://github.com/Dobrokhvalov/ethereumjs-wallet-react-native
import { asyncRandomBytes } from 'react-native-secure-randombytes';
import fastCrypto from 'react-native-fast-crypto';

window.randomBytes = asyncRandomBytes;
window.scryptsy = fastCrypto.scrypt;

global.crypto = require('crypto');
    
