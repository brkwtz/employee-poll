import React from 'react'
import {submitFeedback} from './../reducer'

export default class ExtraFeedbackBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextEnter = this.handleTextEnter.bind(this)
  }

  handleTextEnter(e) {
    e.preventDefault()
    const commentText = e.target.value
    submitFeedback(commentText)
  }

  render() {
    return (
      <div id="extraFeedback">
        <h1>Anything to Add?</h1>
        <form>
          <textarea className="comment" onChange={this.handleTextEnter} placeholder="Anything to add?"/>
        </form>
      </div>
    )
  }
}
