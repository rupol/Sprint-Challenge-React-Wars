import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";

const Cards = props => {
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
    <div>
      {data.map(person => {
        return <PersonCard key={person.name} name={person.name} />;
      })}
    </div>
  );
};

export default Cards;
