import React from 'react'

export default class ThankYouBox extends React.Component {
  render() {
    return (
      <div id="headerBox">
        <div id="editIcon">
            <img src="../images/EditIcon.svg"/>
        </div>
        <div id="header">
          <img id="ratingImage" src={this.props.ratingImageUrl}></img>
        </div>
        <div id="anonymousMessage">
          <h1>{this.props.ratingResponse}</h1>
          <p>Your answers will always remain anonymous and will be viewed by the following managers:</p>
          {this.props.managers.length ? this.props.managers.map(manager => {
          return (
            <div className="manager" key={manager.name}>
              <img src={manager.avatarUrl}></img>
              <p>{manager.name}</p>
            </div>
          )
          }) : null}
        </div>
      </div>
    )
  }
}
