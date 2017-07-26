import React from 'react'
import ReactDOM from 'react-dom'

import QuestionBox from './QuestionBox.jsx'

export default class PollQuestions extends React.Component {
  render() {
    return (
      <div id="questions">
        {this.props.questions.map(question => <QuestionBox key={question.prompt} question={question}/>)}
      </div>
    )
  }
}
