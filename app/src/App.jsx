import { useState } from 'react'

import Container from './components/common/Container';
import LessonBuilder from './components/admin/LessonBuilder';
import GlobalStyle from './styles/globalStyle';


function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <LessonBuilder></LessonBuilder>
      </Container>
    </>
  )
}

export default App
