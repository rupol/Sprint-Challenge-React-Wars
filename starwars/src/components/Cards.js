import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
`;

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <FlexContainer>
      {data.map(person => {
        let homeworld;
        if (person.homeworld === "https://swapi.co/api/planets/1/") {
          homeworld = "Tatooine";
        } else if (person.homeworld === "https://swapi.co/api/planets/2/") {
          homeworld = "Alderaan";
        } else if (person.homeworld === "https://swapi.co/api/planets/8/") {
          homeworld = "Naboo";
        } else if (person.homeworld === "https://swapi.co/api/planets/20/") {
          homeworld = "Stewjon";
        }

        return (
          <PersonCard
            key={person.name}
            name={person.name}
            birth_year={person.birth_year}
            homeworld={homeworld}
            gender={person.gender}
            hair_color={person.hair_color}
            height={person.height}
            mass={person.mass}
          />
        );
      })}
    </FlexContainer>
  );
};

export default Cards;
