import React from 'react';

const CharacterCard = (props) =>
  <div className="charactercard">
    <img className="char-img" src="http://www.alltimelines.com/wp-content/uploads/2015/05/maxresdefault.jpg"/>
    <h1> { props.name } </h1>
    <h3> { props.hair_color } </h3>
    <h3> { props.eye_color } </h3>
  </div>

export default CharacterCard;
