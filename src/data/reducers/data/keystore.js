import {
  CREATE_WALLET
} from './../../../actions/wallet'

function keystore(state = null, action) {
  switch (action.type) {
    case CREATE_WALLET:
      return action.paylod.keystore
    default:
      return state
  }
}

export default keystore