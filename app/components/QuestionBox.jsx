import React from 'react'
import ReactDOM from 'react-dom'

import RatingsBar from './RatingsBar.jsx'


export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {commentStyle: {display: "none"}}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({commentStyle: "contents"})
  }

  render() {
    return (
      <div className="question">
        <h1>{this.props.question.prompt}</h1>
        <RatingsBar />
        <form>
          <button onClick={this.handleClick}>Add comment</button>
          <textarea style={this.state.commentStyle} placeholder="Anything to add or suggest to your manager?"/>
        </form>
      </div>
    )
  }
}
