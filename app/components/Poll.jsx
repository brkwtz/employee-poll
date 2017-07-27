import React from 'react'
import store from './../store'
import {loadForm, setMoodAttributes} from './../reducer'

import ThankYouBox from './ThankYouBox.jsx'
import ExtraFeedbackBox from './ExtraFeedbackBox.jsx'
import PollQuestions from './PollQuestions.jsx'
import SubmitButton from './SubmitButton.jsx'

export default class Poll extends React.Component {

  constructor(props) {
    super(props)
    this.state = Object.assign({}, store.getState())
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
    store.dispatch(loadForm())
    store.dispatch(setMoodAttributes(this.props.match.params.mood))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <ThankYouBox managers={this.state.managers} mood={this.state.mood} ratingResponse={this.state.ratingResponse} ratingImageUrl={this.state.ratingImageUrl} />
        <PollQuestions questions={this.state.questions} />
        <ExtraFeedbackBox />
        <SubmitButton />
      </div>
    )
  }
}
