import React from 'react'
import '../styles/app.css'
import ItemList from '../containers/ItemList'
import ItemDetail from '../containers/ItemDetail'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <ItemList />
        <ItemDetail />
      </div>
    </div>
  )
}

export default App
