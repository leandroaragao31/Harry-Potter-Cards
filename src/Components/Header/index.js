import React from 'react'


import * as S from './styles'

export function Header() {
  return (
    <>
      <S.BoxLogo>
      <S.Logo src="https://25.media.tumblr.com/tumblr_mathf6gIxq1rr59m1o1_500.gif" />
      </S.BoxLogo>
      <S.Menu>
        <S.BoxList>
          <S.ListMenu>
            Home
          </S.ListMenu>
          <S.ListMenu>
            Escolas
          </S.ListMenu>
          <S.ListMenu>
            Personagens
          </S.ListMenu>
          <S.ListMenu>
            Feitiços
          </S.ListMenu>
        </S.BoxList>
      </S.Menu>

    </>
  )
}