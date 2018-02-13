import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import createStoreWithMiddleware from './store'

import App from './components/app'

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
)
