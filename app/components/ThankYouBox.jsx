import React from 'react'

export default class ThankYouBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratingResponse: "",
      ratingImageUrl: ""
    }
  }

  componentDidMount() {
    let ratingImageUrlSegment
    let ratingResponseSegment

    if(this.props.rating === 5) {
      ratingImageUrlSegment = "VeryHappy"
      ratingResponseSegment = "Awesome!"
    } else if(this.props.rating === 4) {
      ratingImageUrlSegment = "Happy"
      ratingResponseSegment = "Great!"
    } else if(this.props.rating === 3) {
      ratingImageUrlSegment = "Neutral"
      ratingResponseSegment = "OK... things could be better."
    } else if(this.props.rating === 2) {
      ratingImageUrlSegment = "Unhappy"
      ratingResponseSegment = "Mmmmh, things should improve."
    } else if(this.props.rating === 1) {
      ratingImageUrlSegment = "VeryUnhappy"
      ratingResponseSegment = "Oops, something needs to change."
    } else {
      ratingImageUrlSegment = "Neutral"
      ratingResponseSegment = "OK... things could be better."
    }

    this.setState({ratingImageUrl: "/images/" + ratingImageUrlSegment + ".svg"})
    this.setState({ratingResponse: ratingResponseSegment + ' Thank you for your feedback.'})
  }

  render() {
    console.log('this.state',this.state)
    console.log('this.props.managers',this.props.managers)
    return (
      <div>
        <div id="ratingImage">
          <img src={this.state.ratingImageUrl}></img>
        </div>
        <div id="ratingResponse">
          <h1>{this.state.ratingResponse}</h1>
        </div>
        <div id="anonymousMessage">
          <p>Your answers will always remain anonymous and will be viewed by the following managers:</p>
        </div>
        <div id="managers">
          {this.props.managers.length ? this.props.managers.map(manager => {
            return (
              <div className="manager" key={manager.name}>
                <img src={manager.avatarUrl}></img>
                <p>{manager.name}</p>
              </div>
            )
            }) : null
          }
        </div>
      </div>
    )
  }
}
