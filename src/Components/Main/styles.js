import styled  from "styled-components";

export const Container =styled.main`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    background-color:#3f3f40;
    width:100%;
    overflow:hidden;
`
export const Title =styled.h1`
    font-size:2vw;
    font-weight:300;
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
    border:solid #00020c;
    background-color:#1d3f52;
    width:18%;
    margin-bottom:2vh;
    margin-top:4vh;
    transition:0.5s;
    font-size:1.5rem;
    color:#c5c3c8;
    &:hover{
        border: 2px transparent solid;
        transform: scale(105%)
    }
   
`