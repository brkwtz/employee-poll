import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentBox extends React.Component {
  render() {
    return (
      <form>
        <textarea placeholder="Anything to add?"/>
      </form>
    )
  }
}
