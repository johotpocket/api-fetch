import React, {Component} from 'react';
import CharactersList from './characterslist';
import Spinner from './spinner'

class CharactersContainer extends Component {
  state = {
    characters: undefined
  }
  componentDidMount = () => this.fetchCharacters()

  fetchCharacters = () =>
    fetch('/api/starwars')
      .then(blob => blob.json())
      .then(characters => {
        console.table(characters)
        this.setState({ characters })
      })
      .catch(e => e)

  render(){
    return (
      <div>
    { this.state.characters ? <CharactersList chars={this.state.characters}/> : <Spinner/>}
      </div>
    )
  }
}

export default CharactersContainer
