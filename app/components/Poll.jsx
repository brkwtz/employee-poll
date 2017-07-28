import React from 'react'
import store from './../store'
import {loadForm, setMoodAttributes} from './../reducer'

import ThankYouBox from './ThankYouBox.jsx'
import ExtraFeedbackBox from './ExtraFeedbackBox.jsx'
import PollQuestions from './PollQuestions.jsx'
import SubmittedBox from './SubmittedBox.jsx'

export default class Poll extends React.Component {

  constructor(props) {
    super(props)
    this.state = Object.assign({
      submitted: false,
      submittable: false
    }, store.getState())
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
    store.dispatch(loadForm())
    store.dispatch(setMoodAttributes(this.props.match.params.mood))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({submitted: true})
  }


  render() {
    // placeholder
    let submittable = true

    return (
      <div>
      {this.state.submitted ? 
      (<div>
        <SubmittedBox/>
      </div>) :
      (<div>
        <ThankYouBox managers={this.state.managers} mood={this.state.mood} ratingResponse={this.state.ratingResponse} ratingImageUrl={this.state.ratingImageUrl} />
        <PollQuestions questions={this.state.questions} />
        <ExtraFeedbackBox />
        <div>
          { submittable ? <button onClick={this.handleSubmit}>Send Answers -></button> : <button disabled>Send Answers -></button> }
        </div>
      </div>)
      }
      </div>
    )
  }
}
