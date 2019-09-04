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

const Button = styled.button`
  font-size: 2rem;
  padding: 6px 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  color: white;
  background-color: black;
`;

const Cards = props => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const nextPage = page => {
    setPage(page => page + 1);
    console.log(page);
  };

  const previousPage = page => {
    setPage(page => page - 1);
    console.log(page);
  };

  return (
    <>
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
          } else {
            homeworld = person.homeworld;
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
      <Button onClick={previousPage}>Previous</Button>
      <Button onClick={nextPage}>Next</Button>
    </>
  );
};

export default Cards;
