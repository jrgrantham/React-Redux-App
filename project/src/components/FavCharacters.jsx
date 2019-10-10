import React from "react";
import { connect } from "react-redux";
import { getCharacters, removeFromFavourites } from "../state/actionCreators";


const FavCharacters = props => {

  return (
    <div className='favCharacters'>
      <h2>Favourite Characters</h2>
      <div>
        {props.rickAndMorty.favourites.map(character => {
          return (
            <div className='favCharacterCard' key={character.id}>
              <h6>{character.name}</h6>
              <img src={character.image} alt={character.name} />
              <button onClick={() => props.removeFromFavourites(character)} >Remove</button>
            </div> 
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state, 
  {getCharacters, removeFromFavourites},
)(FavCharacters);
