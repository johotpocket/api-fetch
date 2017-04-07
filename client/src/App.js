import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ReposView = (props) =>
    <div>
      {props.data.map(item => {
        return (
          <div>
            <p> { item.name } </p>
            <p> { item.url } </p>
          </div>
          )
        }
      )}
    </div>

class App extends Component {

  state = {
    repos: undefined
  }
  componentDidMount() {
    console.log("%c Hi Im here", "font-size: 20px; color: blue;");
    fetch('https://api.github.com/users/johotpocket/repos')
      .then(blob => blob.json())
      .then(data => {
        console.table(data);
        const filteredRepos = data.map(item => {
          return { name: item.name, url: item.html_url, desc: item.description }
        })
        this.setState({ repos: filteredRepos })
      })
      .catch(e => {
        console.log(e);
        return e;
      })
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
           <h3> { this.state.repos ? <ReposView data={ this.state.repos }/> : undefined } </h3>
        </div>
      </div>
    );
  }
}

export default App;
