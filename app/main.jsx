'use strict'
import React from 'react'
import {HashRouter as Router, Route, hashHistory, IndexRedirect} from 'react-router-dom'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Poll from './components/Poll.jsx'

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route exact path='/'>
        <Route path='/demo-question/:mood' component={Poll}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);