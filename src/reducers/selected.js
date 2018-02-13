const activeMail = (state = null, action) => {
  switch (action.type) {
    case 'EMAIL_SELECTED':
      return action.payload
    default:
      return state
  }
}

export default activeMail
