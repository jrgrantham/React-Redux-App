import React from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const StyledCharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  padding: 0.6rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin: 2rem;
`;

export default function CharacterList(props) {
  const { characterList } = props;

  return (
    <div>
      <Title>Characters</Title>
      <StyledCharacterList>
        {characterList.map(character => (
          <CharacterCard 
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            episodes={character.episode.length}
            image={character.image}
            location={character.location.name}
            status={character.status}
          />
        ))}
      </StyledCharacterList>
    </div>
  );
}
