import { combineReducers } from 'redux'
import emailsReducer from './emails'
import activeEmail from './selected'
import modalReducer from './modal'

const reducers = combineReducers({
    emails: emailsReducer,
    activeEmail: activeEmail,
    modal: modalReducer
})

export default reducers
