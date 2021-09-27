import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './styles';

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
    <S.Container>

      {card.map((item) =>
        <>
          <S.List>
            <S.Title> {item.name}</S.Title>
            <S.Photo src={item.image} />
            <div>Gender: {item.gender}</div>
            <div> Race:  {item.species}</div>
            <div> House: {item.house} </div>
          </S.List>
        </>
      )}

    </S.Container>
  )
}