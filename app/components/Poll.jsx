import React from 'react'
import store from './../store'
import {loadForm, setMoodAttributes} from './../reducer'

import ThankYouBox from './ThankYouBox.jsx'
import ExtraFeedbackBox from './ExtraFeedbackBox.jsx'
import PollQuestions from './PollQuestions.jsx'
import SubmittedBox from './SubmittedBox.jsx'
import { StitchClient } from 'mongodb-stitch';

let appId = 'employee-poll-uitzv';
let stitchClient = new StitchClient(appId);
let db = stitchClient.service("mongodb", "mongodb-atlas").db("employee-poll");
let pollResults = db.collection("pollResults");

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

    pollResults.insert([{ dummyField1: 'placeholder' }, { dummyField2: 'placeholder' }])
      .then((inserted) => {
        console.log('success! the following data have been inserted:', inserted)
      })
      .catch(err);
  }


  render() {
    let submittable = true
    
    return (
      <div>
        <div className="sidebar">
          <img id="butterfly" src="../images/Butterfly.svg"/>
          <img id="infoicon" src="../images/InfoIcon.svg"/>
        </div>
      <div className="pageContent">
      {this.state.submitted ? 
      (<div>
        <SubmittedBox/>
      </div>) :
      (<div>
        <ThankYouBox managers={this.state.managers} mood={this.state.mood} ratingResponse={this.state.ratingResponse} ratingImageUrl={this.state.ratingImageUrl} />
        <PollQuestions questions={this.state.questions} />
        <ExtraFeedbackBox />
        <div>
          { submittable ? <button onClick={this.handleSubmit}>Send Answers</button> : <button disabled>Send Answers</button> }
        </div>
      </div>)
      }
      </div>
      </div>
    )
  }
}
