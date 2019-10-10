import React from 'react';
import { connect } from "react-redux";

const Character = props => {

  return (
    <div>
      <h6>Character</h6>
      <div>
        {props.rickAndMorty.characters.map(character => <h6>{character.name}</h6>)}
      </div>
      {props.rickAndMorty.characters[0].name}
    </div>
  );
};

export default connect(
  state => state,
  {}
)(Character);