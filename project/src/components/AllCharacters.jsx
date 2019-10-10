import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, addToFavourites } from "../state/actionCreators";


const AllCharacters = props => {

  useEffect(() => {
    props.getCharacters();
  }, [])

  return (
    <div>
      <h2>All Characters</h2>
      <div>
        {props.rickAndMorty.characters.map(character => {
          return (
            <div key={character.id}>
              <h6>{character.name}</h6>
              <img src={character.image} alt={character.name} />
              <button onClick={() => props.addToFavourites(character)} >Add to Favourites</button>
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
)(AllCharacters);
