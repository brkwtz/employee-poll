import React from 'react'

export default class ThankYouBox extends React.Component {
  render() {
    return (
      <div>
        <div id="ratingImage">
          <img src={this.props.ratingImageUrl}></img>
        </div>
        <div id="ratingResponse">
          <h1>{this.props.ratingResponse}</h1>
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
