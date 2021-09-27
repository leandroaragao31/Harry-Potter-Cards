import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BoxList, Container, List, Photo, Title } from './styles';

export function Main() {

  const [card, setCard] = useState([])


  useEffect(() => {
    axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(res => {
        console.log(res)
        setCard(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>

      {card.map((item) =>
        <>
          <List>
            <Title> {item.name}</Title>
            <Photo src={item.image} />
            <div>Gender: {item.gender}</div>
            <div> Race:  {item.species}</div>
            <div> House: {item.house} </div>
          </List>
        </>
      )}

    </Container>
  )
}