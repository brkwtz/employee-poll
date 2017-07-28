import React from 'react'
import _ from 'lodash'
import QuestionBox from './QuestionBox.jsx'

export default class PollQuestions extends React.Component {
  render() {
    let questions = _.shuffle(this.props.questions)

    return (
      <div id="questions">
        <h2>Do you agree with the following statements:</h2>
        {questions.length ? questions.map(question => <QuestionBox questions={questions} key={question.prompt} question={question}/>) : null}
      </div>
    )
  }
}
