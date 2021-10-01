import React from 'react'
import { Link  } from 'gatsby'

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
            <Link style={{textDecoration:'none', color:'black'}}  to ="/">Home</Link>
          </S.ListMenu>
          <S.ListMenu>
            <Link style={{textDecoration:'none', color:'black'}}  to="/Sobre">sobre</Link>
          </S.ListMenu>
          <S.ListMenu>
            <Link style={{textDecoration:'none', color:'black'}} to="">Escolas</Link>
          </S.ListMenu>
          <S.ListMenu>
            <Link style={{textDecoration:'none',color:'black'}}  to="">feitiços</Link>
          </S.ListMenu>
        </S.BoxList>
      </S.Menu>

    </>
  )
}