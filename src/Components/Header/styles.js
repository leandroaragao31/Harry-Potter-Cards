import { Link } from "gatsby";
import styled  from "styled-components";



export const Menu = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Explora&family=Inconsolata&display=swap');      
`
export const BoxLogo =styled.figure`
    display:flex;
    justify-content:center;
    background-color:#00020C;
    opacity:0.8;
`


export const Logo = styled.img`
    width:25%; 
`

export const BoxList = styled.ul`
    display:flex;
    width:100%;
    max-height:15vh;
    border:1px solid;
    list-style:none;
    background-color:#c5c3c8;
    justify-content:space-evenly;

`

export const ListMenu = styled.li`
    display:flex;
    cursor: pointer;
    font-size:1.5vw;
    justify-content:space-evenly;
    text-align:center;
    text-transform:capitalize;
    font-family: 'Inconsolata', sans-serif;
    transition:2s;
    &:hover{
        transform: scale(80%);
        font-weight:bold;
    }
`

export const List = styled(Link)`
    text-decoration:none;
    width:10vw;
    color:#303030;
    &:hover{
        color:#fa5735;
    }
`