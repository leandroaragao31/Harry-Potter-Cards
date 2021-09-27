import styled  from "styled-components";


export const Menu = styled.nav`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Explora&family=Inconsolata&display=swap');
       
`
export const BoxLogo =styled.figure`
    display:flex;
    justify-content:center;
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
    background-color:#FFE4B5;
    justify-content:space-evenly;
    margin-bottom:2vh;
`

export const ListMenu = styled.li`
    display:flex;
    cursor: pointer;
    font-size:1.5vw;
    justify-content:space-evenly;
    text-align:center;
    font-family: 'Inconsolata', monospace;
    transition:2s;
    &:hover{
        transform: scale(80%);
        
    }

    


`