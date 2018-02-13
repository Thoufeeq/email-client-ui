import { database } from '../firebase'

export const getEmails = () => {
  return dispatch => {
    database.ref('emails').on('value', db => {
      dispatch({
        type: 'GET_EMAILS',
        payload: db.val()
      })
    })
  }
}

export const selectEmail = item => {
  return {
    type: 'EMAIL_SELECTED',
    payload: item
  }
}

export const activateModal = sig => {
  return {
    type: 'ACTIVATE_MODAL',
    payload: sig
  }
}
