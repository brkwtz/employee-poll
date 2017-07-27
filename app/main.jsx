'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, hashHistory, IndexRedirect} from 'react-router-dom'
import {render} from 'react-dom'
import _ from 'lodash'
import {Provider} from 'react-redux'
import store from './store'

import Poll from './components/Poll.jsx'

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        {/*<IndexRedirect to='/demo-question/:mood'/>*/}
        <Route path='/demo-question' component={Poll}>
          <Route path='/demo-question/:mood' component={Poll}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
