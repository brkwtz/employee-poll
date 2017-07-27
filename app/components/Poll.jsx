import React from 'react'
import store from './../store'
import {loadForm} from './../reducer'

import ThankYouBox from './ThankYouBox.jsx'
import ExtraFeedbackBox from './ExtraFeedbackBox.jsx'
import PollQuestions from './PollQuestions.jsx'
import SubmitButton from './SubmitButton.jsx'

export default class Poll extends React.Component {

  constructor(props) {
    super(props)
    this.state = Object.assign({}, store.getState())
  }

  componentDidMount() {
    store.dispatch(loadForm())
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    console.log('this.props',this.props)
    console.log('this.state',this.state)
    return (
      <div>
        <ThankYouBox managers={this.state.managers} />
        <PollQuestions questions={this.state.questions} />
        <ExtraFeedbackBox />
        <SubmitButton />
      </div>
    )
  }
}
