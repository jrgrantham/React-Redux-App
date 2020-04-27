import React from "react";
import "./App.css";
import { connect } from "react-redux";
import AllCharacters from "./components/AllCharacters";
import FavCharacters from "./components/FavCharacters";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="mainSite">
        <Header />
        <div className="siteContent">
          <AllCharacters />
          <FavCharacters />
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => state,
  {}
)(App);
