import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Table from '../components/Table'
import Comment from '../components/Comment'

export default function Router () {

  return (
  <BrowserRouter>
    <Switch>
      <Route component={Table} exact path="/" />
      <Route component={Comment} exact path="/:movieId" />
    </Switch>
  </BrowserRouter>
  )
}
