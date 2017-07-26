import React from 'react'

import CommentBox from './CommentBox.jsx'

export default class ExtraFeedbackBox extends React.Component {
  render() {
    return (
      <div id="extraFeedback">
        <h1>Anything to Add?</h1>
        <CommentBox />
      </div>
    )
  }
}
