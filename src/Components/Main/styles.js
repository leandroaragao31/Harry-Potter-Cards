import styled  from "styled-components";

export const Container =styled.main`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    border-bottom: solid 1vh;
    background-color:#BEBEBE;
    width:100%;
`
export const Title =styled.h1`
    font-size:15px;
    text-align:center;
`

export const Photo =styled.img`
    width:12vw;
   max-height:32vh;
   cursor: pointer;
`

export const List = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:1vw;
    justify-content:space-evenly;
    border:solid;
    background-color:#6C7B8B;
    width:18%;
    margin-bottom:2vh;
    transition:0.5s;
    &:hover{
        border: 2px #6E7B8B solid;
        transform: scale(105%)
    }
   
`