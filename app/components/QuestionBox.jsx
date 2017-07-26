import React from 'react'
import ReactDOM from 'react-dom'

import CommentBox from './CommentBox.jsx'
import RatingsBar from './RatingsBar.jsx'


export default class QuestionBox extends React.Component {
  render() {
    return (
      <div className="question">
        <h1>{this.props.question.prompt}</h1>
        <RatingsBar />
        <CommentBox />
      </div>
    )
  }
}
