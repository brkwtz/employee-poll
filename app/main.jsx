'use strict'
import React from 'react'
// import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'
// import {connect, Provider} from 'react-redux'

//import redux store
// import store from './store'

//import components and containers
import Poll from './components/Poll.jsx'

//------------------seed data below------------------//

let QUESTIONS = [
  {prompt: "I feel comfortable working and interacting with the colleagues on my team.", rating: null, comment: null},
  {prompt: "My direct manager gives me necessary support and clear objectives.", rating: null, comment: null},
  {prompt: "I like my work environment, and I believe it helps me perform at my best.", rating: null, comment: null},
  {prompt: "I am satisfied with my roles and responsibilities.", rating: null, comment: null},
  {prompt: "I feel like I have a healthy work/life balance.", rating: null, comment: null}
]

// replace this value with the value of the query param
let RATING = '5'

// this is a static value for testing purposes
const MANAGERS = [
  {name: "Marcus Perezi-Tormos", avatarUrl: "/images/marcus"},
  {name: "Simon Rakosi", avatarUrl: "/images/simon"}
]

//render root component
ReactDOM.render(
  <Poll questions={QUESTIONS} managers={MANAGERS} rating={RATING}/>,
  document.getElementById('container')
);
