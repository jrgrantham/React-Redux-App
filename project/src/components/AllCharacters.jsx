import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters, addToFavourites } from "../state/actionCreators";

const AllCharacters = props => {
  useEffect(() => {
    props.getCharacters();
  }, []);

  return (
    <div className="allCharacters">
      <h2>All Characters</h2>
      <div>
        {props.rickAndMorty.characters.map(character => {
          return (
            <div className="allCharacterCard" key={character.id}>
              <div>
                <img
                  className="smallImage"
                  src={character.image}
                  alt={character.name}
                />
              </div>
              <div className='cardInfo'>
                <h4>{character.name}</h4>
                <button onClick={() => props.addToFavourites(character)}>
                  Add to Favourites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { getCharacters, addToFavourites }
)(AllCharacters);
