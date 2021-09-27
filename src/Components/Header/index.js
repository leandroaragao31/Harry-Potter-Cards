import React from 'react'


import { ListMenu, BoxList, Logo, Menu, BoxLogo } from './styles'

export function Header() {
  return (
    <>
      <BoxLogo>
      <Logo src="https://25.media.tumblr.com/tumblr_mathf6gIxq1rr59m1o1_500.gif" />
      </BoxLogo>
      <Menu>
        <BoxList>
          <ListMenu>
            Home
          </ListMenu>
          <ListMenu>
            Escolas
          </ListMenu>
          <ListMenu>
            Personagens
          </ListMenu>
          <ListMenu>
            Feitiços
          </ListMenu>
        </BoxList>
      </Menu>

    </>
  )
}