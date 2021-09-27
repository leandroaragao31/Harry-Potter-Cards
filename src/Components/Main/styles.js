import styled  from "styled-components";

export const Container =styled.main`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    background-color:#BEBEBE;
    width:100%;
`
export const Title =styled.h1`
    font-size:15px;
    text-align:center;
`

export const Photo =styled.img`
    width:13vw;
   max-height:40vh;
`

export const List = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:1vw;
    justify-content:space-evenly;
    border:solid;
    background-color:#6C7B8B;
    width:20%;
    margin-bottom:2vh;
`