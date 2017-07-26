import React from 'react'

import RatingsBar from './RatingsBar.jsx'


export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentVisible: false,
      rating: 0
    }
    this.handleAddCommentClick = this.handleAddCommentClick.bind(this)
  }

  handleAddCommentClick(e) {
    e.preventDefault()
    this.setState({commentVisible: true})
  }

  // handleRatingClick(e, val) {
  //   e.preventDefault()
  //   this.setState({rating: val})
  // }

  render() {
    return (
      <div className="question">
        <h1>{this.props.question.prompt}</h1>
        <form className="ratingsBar">
          <input className="barRadio" type="radio" name="rating" value="1" onClick={this.handleRatingClick}></input>
          <input className="barRadio" type="radio" name="rating" value="2"></input>
          <input className="barRadio" type="radio" name="rating" value="3"></input>
          <input className="barRadio" type="radio" name="rating" value="4"></input>
          <input className="barRadio" type="radio" name="rating" value="5"></input>
          <p className="barNotation">Strongly Agree</p>
          <p className="barNotation">Strongly Disagree</p>
          <button onClick={this.handleAddCommentClick}>Add comment</button>
          { this.state.commentVisible ? <textarea className="comment" style={this.state.commentStyle} placeholder="Anything to add or suggest to your manager?"/> : null }
        </form>
      </div>
    )
  }
}
