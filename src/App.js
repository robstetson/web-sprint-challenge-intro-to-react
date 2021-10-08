import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [jediInfo, setJediInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        setJediInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(jediInfo);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {jediInfo.map((character) => {
        return <Character key={character.id} info={character} />;
      })}
    </div>
  );
};

export default App;
