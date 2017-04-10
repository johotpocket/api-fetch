import React, { Component } from 'react';
import Jumbo from './jumbo';
import CharactersContainer from './characterscontainer';

class CharacterApp extends Component {
  render() {
    return (
      <div className="container">
        <div>
           <Jumbo/>
        </div>
        <div>
          <CharactersContainer />
        </div>
      </div>
    )
  }
}

export default CharacterApp;
