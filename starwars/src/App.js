import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 18rem;
  font-family: "Faster One", cursive;
  margin: 50px 2%;
  @media (max-width: 1300px) {
    font-size: 13rem;
  }
  @media (max-width: 550px) {
    font-size: 10rem;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Title>React Wars</Title>
      <Cards />
    </div>
  );
};

export default App;
