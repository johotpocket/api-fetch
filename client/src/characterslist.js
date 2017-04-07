import React from 'react'
import CharacterCard from './charactercard'

const CharactersList = (props) =>
  <div>
    {
    props.chars.map((i) => <CharacterCard {...i}/>)
   }
  </div>
export default CharactersList
