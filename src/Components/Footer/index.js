
import React from 'react';
import * as S from './styled'
import Git from '../../images/github.png'

export function Footer(){
    return(
        <>
    <S.Title>Contatos</S.Title>
        <S.Container>
            
            <ul>
                <S.Links target="_blank" href="https://github.com/leandroaragao31">
                    <S.Photo src={Git} alt="github"/>
                </S.Links>
                <S.Links target="_blank" href="https://www.linkedin.com/in/leandro-aragao-522841207/">
                    <S.Photo src="https://www.freepnglogos.com/uploads/linkedin-social-logo-png-24.png" alt="linkedin"/>
                </S.Links>
                <S.Links target="_blank" href="leandroaragao31@gmail.com">
                    <S.Photo src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2-1.png" alt="email"/>
                </S.Links>
            </ul>
            <p><b>Desevolvido por:</b> Leandro de Aragão</p>
        </S.Container>
        </>
    )
}