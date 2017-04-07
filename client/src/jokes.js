import React, { Component } from 'react';

const JokesView = (props) => {
  return (
    <div>
      <p> { props.data } </p>
    </div>
  )
}

class JokesApp extends Component {

  state = {
    jokes: undefined
  }
  componentDidMount() {
    fetch('/api/jokes')
    .then(blob => blob.json())
    .then(data => {
      console.log(data);
      this.setState({ jokes: data.message })
    })
    .catch(e => {
      console.log(e)
      return e;
    })
  }
  render() {
    return (
      <div>
        <h3> { this.state.jokes ? <JokesView data={ this.state.jokes }/> : undefined } </h3>
      </div>
    )
  }
}
export default JokesApp;
