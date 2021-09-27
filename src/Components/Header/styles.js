import styled  from "styled-components";


export const Menu = styled.nav`
          
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
    border:solid;
    list-style:none;
    background-color:#EEE8AA;
    justify-content:space-evenly;
    margin-bottom:2vh;
`

export const ListMenu = styled.li`
    display:flex;
    cursor: pointer;
    justify-content:space-evenly;
    text-align:center;
    &:hover{
        background-color:#B8860B;
    }


`