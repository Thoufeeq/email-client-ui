const ModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'ACTIVATE_MODAL':
      return action.payload
    default:
      return state
  }
}

export default ModalReducer
