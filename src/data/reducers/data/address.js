import {
  CREATE_WALLET
} from './../../../actions/wallet'

function address(state = null, action) {
  switch (action.type) {
    case CREATE_WALLET:
      return action.paylod.address
    default:
      return state
  }
}

export default address