import React from 'react'
import { Link  } from 'gatsby'

import * as S from './styles'

export function Header() {
  return (
    <>
      <S.BoxLogo>
        <S.Logo src="https://img.wattpad.com/998b50c3b25cc84f929ab13bbd85b9085c33c7bf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f48686d7864625933484264497a513d3d2d313038323631333838312e313638373161363636303062326165333132303735393835363133312e676966" />
      </S.BoxLogo>
      <S.Menu>
        <S.BoxList>
          <S.ListMenu>
            <S.List   to ="/">Home</S.List>
          </S.ListMenu>
          <S.ListMenu>
            <S.List   to="/Sobre">sobre</S.List>
          </S.ListMenu>
          <S.ListMenu>
            <S.List  to="">Escolas</S.List>
          </S.ListMenu>
          <S.ListMenu>
            <S.List  to="">feitiços</S.List>
          </S.ListMenu>
        </S.BoxList>
      </S.Menu>

    </>
  )
}