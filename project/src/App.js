import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Character from "./components/Character";

function App(characters) {
  return (
    <div className="App">
      <h1>Ricky and Morty Fan Club</h1>
      <div>
        <Character />
      </div>
    </div>
  );
}

export default connect(
  state => state,
  {}
)(App);
