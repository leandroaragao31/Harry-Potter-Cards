import { Link } from 'gatsby';
import React from 'react';
import * as S from './styled'

export function Footer(){
    return(
        <>
    <S.Title>Contatos</S.Title>
        <S.Container>
            
            <ul>
                <Link target="_blank" to="https://github.com/leandroaragao31">
                    <S.Photo src="" alt="github"/>
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/in/leandro-aragao-522841207/">
                    <S.Photo src="" alt="linkedin"/>
                </Link>
                <Link target="_blank" to="">
                    <S.Photo src="" alt="email"/>
                </Link>
            </ul>
            <p>Desevolvido por: Leandro de Aragão</p>
        </S.Container>
        </>
    )
}