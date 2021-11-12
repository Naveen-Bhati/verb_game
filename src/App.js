import React from 'react'
import styled from 'styled-components';
import GlobalStyle, { Container } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage';
import LevelPage from './pages/LevelPage';
import EasyLevelPage from './pages/EasyLevelPage';
import MediumLevelPage from './pages/MediumLevelPage';
import HardLevelPage from './pages/HardLevelPage'


const GameTitle = styled.h1`
color: var(--white);
font-size: 4rem;
letter-spacing: 3px;
word-spacing: 10px;
text-align: center;
position: absolute;
top: 0;
background-color: #12A869;
display: inline-block;
width: 100vw;
padding: 15px;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <GameTitle>Magic Words</GameTitle>
        <Router>
          <Container>
            <Routes>
              <Route path='/' element={<StartPage />}></Route>
              <Route path='/level' element={<LevelPage />}></Route>
              <Route path='/easy' element={<EasyLevelPage />}></Route>
              <Route path='/medium' element={<MediumLevelPage />}></Route>
              <Route path='/hard' element={<HardLevelPage />}></Route>
            </Routes>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
