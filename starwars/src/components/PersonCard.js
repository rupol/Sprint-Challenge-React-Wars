import React from "react";
import styled from "styled-components";

// STYLING
const CardContainer = styled.div`
  background: white;
  opacity: 0.7;
  margin: 10px;
  padding: 5px;
  width: 450px;
`;

const Name = styled.h2`
  font-size: 4rem;
  margin: 10px 5px 20px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 2rem;
  line-height: 3.5rem;
`;

function PersonCard(props) {
  return (
    <>
      <CardContainer>
        <Name>{props.name}</Name>
        <List>
          <ListItem>
            Born: {props.birth_year} on {props.homeworld}
          </ListItem>
          <ListItem>Gender: {props.gender}</ListItem>
          <ListItem>Hair Color: {props.hair_color}</ListItem>
          <ListItem>Height: {props.height}</ListItem>
          <ListItem>Mass: {props.mass}</ListItem>
        </List>
      </CardContainer>
    </>
  );
}

export default PersonCard;
