import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Characters from "./components/AllCharacters";

function App(characters) {
  return (
    <div className="App">
      <h1>Ricky and Morty Fan Club</h1>
      <div>
        <Characters />
      </div>
    </div>
  );
}

export default connect(
  state => state,
  {}
)(App);
