import React from "react";

function PersonCard(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <ul>
        <li>
          Born: {props.birth_year} on {props.homeworld}
        </li>
        <li>Gender: {props.gender}</li>
        <li>Hair Color: {props.hair_color}</li>
        <li>Height: {props.height}</li>
        <li>Mass: {props.mass}</li>
      </ul>
    </>
  );
}

export default PersonCard;
