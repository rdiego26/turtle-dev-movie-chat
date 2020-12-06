import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'

import Router from './components/Router'
import database from './utils/database'

database?.initialize()

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
