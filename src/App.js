import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HowTo from './components/HowTo';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState } from 'react';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './components/GameOver';
import './App.css';
import Game from './Game';



function App() {
 

  return (
    <div className='App'>
      <nav>
        <h1>Fordle</h1>
      </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/howto' element={<HowTo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/board' element={<Board />} />
        </Routes>
      
    </div>
  );
}

export default App;
