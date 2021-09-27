import React from 'react'
import { Main } from '../Components/Main'
import { Header } from '../Components/Header/index'
import { GlobalStyle } from '../Components/GlobalStyled/GlobalStyled'
import { Footer } from '../Components/Footer'
export default function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Footer / >
      <GlobalStyle />
    </div>
  )
}