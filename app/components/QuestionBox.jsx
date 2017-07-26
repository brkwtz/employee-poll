import React from 'react'
import ReactDOM from 'react-dom'

import RatingsBar from './RatingsBar.jsx'


export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {commentVisible: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({commentVisible: true})
  }

  render() {
    return (
      <div className="question">
        <h1>{this.props.question.prompt}</h1>
        <RatingsBar />
        <form>
          <button onClick={this.handleClick}>Add comment</button>
          { this.state.commentVisible ? <textarea style={this.state.commentStyle} placeholder="Anything to add or suggest to your manager?"/> : null }
        </form>
      </div>
    )
  }
}
