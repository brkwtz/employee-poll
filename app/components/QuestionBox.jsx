import React from 'react'
import {submitAnswers, enableSubmit} from './../reducer'

export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentVisible: false
    }
    this.handleAddCommentClick = this.handleAddCommentClick.bind(this)
    this.handleRatingClick = this.handleRatingClick.bind(this)
    this.handleTextEnter = this.handleTextEnter.bind(this)
  }

  handleAddCommentClick(e) {
    e.preventDefault()
    this.setState({commentVisible: true})
  }

  handleRatingClick(e, val) {
    e.preventDefault()
    const thisQuestion = this.props.question
    const allQuestions = this.props.questions
    // save rating to state
    const index = allQuestions.indexOf(thisQuestion)
    if(index !== -1) {
      allQuestions[index].rating = val
    }
    submitAnswers(allQuestions)
    // set comment box visible if rating < 3
    if(this.props.question.rating < 3 && this.state.commentVisible === false) {
      this.setState({commentVisible: true})
    }
    // enable submit button if all questions given a rating
    let disabled = true;
    allQuestions.forEach(question => {
      question.rating ? disabled = false : disabled = true
    })
    disabled ? null : enableSubmit()
  }

  handleTextEnter(e) {
    e.preventDefault()
    const thisQuestion = this.props.question
    const allQuestions = this.props.questions
    const index = allQuestions.indexOf(thisQuestion)
    const commentText = e.target.value
    if(index !== -1) {
      allQuestions[index].comment = commentText
    }
    submitAnswers(allQuestions)
  }

  render() {
    let ratings = [1,2,3,4,5]
    return (
      <div className="question">
        <h1>{this.props.question.prompt}</h1>
        <div className="options">
          <form>
           {ratings.map(rating => <input name="rating" className="barRadio" type="radio" key={rating} value={rating} onClick={e => this.handleRatingClick(e, rating)}></input>)}
          </form>
        </div>
        <div className="barNotation">
          <p>Strongly Agree</p>
          <p>Strongly Disagree</p>
        </div>
        <form>
          { this.state.commentVisible ? <textarea className="comment" style={this.state.commentStyle} onChange={this.handleTextEnter} placeholder="Anything to add or suggest to your manager?"/> : <button className="commentButton" onClick={this.handleAddCommentClick}>Add comment</button> }
        </form>
      </div>
    )
  }
}
