import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Game';

function Letter({ letterPos, attemptVal }) {
  const { board, correctWorld, currAttempt,setDisabledLetters,disabledLetters} = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWorld.toUpperCase()[letterPos] === letter;
  const almost = !correct && correctWorld.toUpperCase().includes(letter) && letter !== '';

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    
    useEffect(() => {
      if(letter !=="" && !correct && !almost){

        setDisabledLetters((prev => [...prev,letter]));
      }
      
    },[currAttempt.attempt]);
  
  
    return (
    <div className='letter' id={letterState}>
      {' '}
      {letter}
    </div>
  );
}

export default Letter;
