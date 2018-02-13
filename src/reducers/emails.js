const emailsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_EMAILS':
      return action.payload
    default:
      return state
  }
}

export default emailsReducer
