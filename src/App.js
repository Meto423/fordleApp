import "./App.css";
import React, { useEffect } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext,useState} from "react";
import {boardDefault,generateWordSet} from './Words';
import GameOver from "./components/GameOver";



export const AppContext = createContext();


function App() {

  

  const [board,setBoard] = useState(boardDefault);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0});//satır ve sütun bilgilerini tutar.
  // app provider verdiğimiz değerleri alt componentlere aktarır.
  const [wordSet,setWordSet] = useState(new Set());
  const [disabledLetters,setDisabledLetters] = useState([]);
  const [gameOver,setGameOver] = useState({gameOver: false , guessedWord: false});
  const[correctWorld,setCorrectWord] = useState("");

  

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words);
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    })
  },[]);


  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });

  }
  const onDeleteLetter = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos -1 ] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });

  }

  const onEnterLetter = () => {
     
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";

    for(let i = 0; i < 5; i++){
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }

    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({attempt:currAttempt.attempt + 1,letterPos: 0});
    }
    else{
      alert("Word not found");
      return;
    }

    if (currWord === correctWorld) {
      setGameOver({gameOver:true, guessedWord:true});
      return;
    }
    if(currAttempt.attempt === 5){
      setGameOver({gameOver:true, guessedWord:false});
      return;
    }

  };
 

  return (

    <div className='App'>
      <nav>
        <h1>Fordle</h1>
      </nav>
      <AppContext.Provider value = {{board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDeleteLetter,
        onEnterLetter,
        correctWorld,
        setDisabledLetters,
        disabledLetters,
        setGameOver,
        gameOver}}>
      
       <div className="game">
       <Board/>
       {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
       </div>
      </AppContext.Provider>
    </div>

    
  );
}

export default App;
