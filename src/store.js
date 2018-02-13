import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default createStoreWithMiddleware
