import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import HowTo from './components/HowTo';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Game from './Game';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home?',
    element: <Home />,
  },
  {
    path: '/howto?',
    element: <HowTo />,
  },
  {
    path: '/login?',
    element: <Login />,
  },
  {
    path: '/signup?',
    element: <SignUp />,
  },
  {
    path: '/game?',
    element: <Game />,
  },
  
]);

root.render(<RouterProvider router={router} />);

reportWebVitals();
