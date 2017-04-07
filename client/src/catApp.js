import React, { Component } from 'react';

const CatsView = (props) =>
    <div>
      {props.data.map(item => {
        return (
          <div>
            <p> { item } </p>
          </div>
          )
        }
      )}
    </div>

class CatApp extends Component {

  state = {
    cats: undefined
  }

  componentDidMount() {
    console.log("hello?")
  fetch('/api/cats')
    .then(blob => blob.json())
    .then(data => {
      console.log(data.facts);
      this.setState({ cats: data.facts })
      })
      .catch(e => {
        console.log(e)
        return e;
      })
    }
    render() {
      return (
        <div>
          <h3> { this.state.cats ? <CatsView data={ this.state.cats }/> : undefined } </h3>
        </div>
      )
    }
  }

export default CatApp
