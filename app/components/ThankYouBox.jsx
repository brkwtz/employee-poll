import React from 'react'
import ReactDOM from 'react-dom'

export default class ThankYouBox extends React.Component {
  render() {
    let ratingImageUrlSegment
    let ratingImageUrl = "/images/" + ratingImageUrlSegment + ".svg"
    let ratingResponseSegment
    let ratingResponse = ratingResponseSegment + ' Thank you for your feedback.'

    if(this.props.rating === '5') {
      ratingImageUrlSegment = "VeryHappy"
      ratingResponseSegment = "Awesome!"
    } else if(this.props.rating === '4') {
      ratingImageUrlSegment = "Happy"
      ratingResponseSegment = "Great!"
    } else if(this.props.rating === '3') {
      ratingImageUrlSegment = "Neutral"
      ratingResponseSegment = "OK... things could be better."
    } else if(this.props.rating === '2') {
      ratingImageUrlSegment = "Unhappy"
      ratingResponseSegment = "Mmmmh, things should improve."
    } else if(this.props.rating === '1') {
      ratingImageUrlSegment = "VeryUnhappy"
      ratingResponseSegment = "Oops, something needs to change."
    }

    return (
      <div>
        <div id="ratingImage">
          <img src={ratingImageUrl}></img>
        </div>
        <div id="ratingResponse">
          <h1>{ratingResponse}</h1>
        </div>
        <div id="anonymousMessage">
          <p>Your answers will always remain anonymous and will be viewed by the following managers:</p>
        </div>
        <div id="managers">
          {this.props.managers.forEach(manager => {
            return (
              <div class="manager">
                <img src={manager.avatarUrl}></img>
                <p>{manager.name}</p>
              </div>
            )
            })
          }
        </div>
      </div>
    )
  }
}
