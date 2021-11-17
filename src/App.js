import React, { Fragment } from 'react'
import GlobalStyle, { Container, GameTitle } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage';
import LevelPage from './pages/LevelPage';
import EasyLevelPage from './pages/EasyLevelPage';
import MediumLevelPage from './pages/MediumLevelPage';
import HardLevelPage from './pages/HardLevelPage'
import LessonPage from './pages/LessonPage';



function App() {


  return (
    <Fragment>
      <GlobalStyle />
      <div className='app'>
        <GameTitle>
          <h1>Magic Words</h1>
        </GameTitle>
        <Router>
          <Container>
            <Routes>
              <Route path='/' element={<StartPage />}></Route>
              <Route path='/level' element={<LevelPage />}></Route>
              <Route path='/easy/lesson' element={<EasyLevelPage />}></Route>
              <Route path='/medium/lesson' element={<MediumLevelPage />}></Route>
              <Route path='/hard/lesson' element={<HardLevelPage />}></Route>
              <Route path='/easy/lessonpage' element={<LessonPage />}></Route>
              <Route path='/medium/lessonpage' element={<LessonPage />}></Route>
              <Route path='/hard/lessonpage' element={<LessonPage />}></Route>

            </Routes>
          </Container>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
