import React from 'react'
import ReactDOM from 'react-dom'

import ThankYouBox from './ThankYouBox.jsx'
import ExtraFeedbackBox from './ExtraFeedbackBox.jsx'
import PollQuestions from './PollQuestions.jsx'
import SubmitButton from './SubmitButton.jsx'

export default class Poll extends React.Component {
  render() {
    return (
      <div>
        <ThankYouBox managers={this.props.managers} rating={this.props.rating} />
        <PollQuestions questions={this.props.questions} />
        <ExtraFeedbackBox />
        <SubmitButton />
      </div>
    )
  }
}
