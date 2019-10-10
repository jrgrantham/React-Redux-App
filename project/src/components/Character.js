import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, addToFavourites } from "../state/actionCreators";
import * as actionCreators from '../state/actionCreators';


const Character = props => {

  useEffect(() => {
    props.getCharacters();
  }, [])

  return (
    <div>
      <h6>Character</h6>
      <div>
        {props.rickAndMorty.characters.map(character => {
          return (
            <div key={character.id}>
              <h6>{character.name}</h6>
              <img src={character.image} alt={character.name} />
              <button onClick={addToFavourites} >Add to Favourites</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state, 
  {getCharacters, addToFavourites},
)(Character);
