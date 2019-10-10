import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <h1>Ricky and Morty Fan Club</h1>
      <div>
        <div>
          <Character />
        </div>
      </div>
      {/* <Navigation />
        <Route exact path="/" component={Welcome} />
        <Route
          path="/characters"
          render={() => <CharacterList characterList={characterData} />}
        />
        <Route
          path="/detailedcharacter/:id"
          render={(routeprops) => <DetailedCharacter {...routeprops} characterList={characterData} />}
        /> */}
    </div>
  );
}

export default connect(
  state => state,
  {}
)(App);
