// Write your Character component here
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 75%;
  align-items: center;
  text-align: center;
  margin-left: 12.5%;
  font-family: "Cairo", sans-serif;
flex-wrap-wrap;
  border: 2px dashed red;
  color: black;
flex-direction: column;


&:hover{
    background: black;
    color: #3ADBE0;
}
`;

const CardStyles = styled.div`
display:flex;
margin: 5rem;
align-items: center;

`;

export default function Character({ info }) {
  const [visible, setVisible] = React.useState(false);

  return (
    <Styles>
      <h2>{info.name}</h2>
      <CardStyles>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "-" : "+"}
        </button>
        {visible && (
          <div>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year:{info.birth_year}</h3>
            <h3>Eye Color:{info.eye_color} </h3>
            <h3>Hair Color:{info.hair_color} </h3>
            <h3>Skin Color: {info.skin_color}</h3>
          </div>
        )}
      </CardStyles>
    </Styles>
  );
}
