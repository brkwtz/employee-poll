import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import QuestionBox from './QuestionBox.jsx'

export default class PollQuestions extends React.Component {
  render() {
    const randomizedQuestions = _.shuffle(this.props.questions)

    return (
      <div id="questions">
        <h2>Do you agree with the following statements:</h2>
        {randomizedQuestions.map(question => <QuestionBox key={question.prompt} question={question}/>)}
      </div>
    )
  }
}
