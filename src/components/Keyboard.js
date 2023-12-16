import React,{useCallback, useEffect, useContext} from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
  const {onSelectLetter,onDeleteLetter,onEnterLetter,disabledLetters,currAttempt} = useContext(AppContext);

  const keys1 =["E","R","T","Y","U","I","O","P","Ğ","Ü"];
  const keys2 = ["A","S","D","F","G","H","J","K","L","Ş","İ"];
  const keys3 = ["Z","X","C","V","B","N","M","Ö","Ç"];

 
  
  
  const handleKeyboard = useCallback((event) =>{
    if (event.key==="Enter"){
      onEnterLetter();

    }
    else if(event.key==="Backspace"){
      onDeleteLetter();
      

    }
    else{
      keys1.concat(keys2).concat(keys3).forEach((key) =>{
        if(key===event.key.toUpperCase()){
          onSelectLetter(key);
        }
      })

    }
  },[currAttempt]);

  useEffect(() =>{
    document.addEventListener("keydown",handleKeyboard);

    return () => {
      document.removeEventListener("keydown",handleKeyboard);

    }
  },[handleKeyboard]);

  
 
  


  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>
        {keys1.map((key) => {
          return <Key keyVal = {key} disabled ={disabledLetters.includes(key)}/>
         
 })}
      </div>
      <div className='line2'>
      {keys2.map((key) => {
           return <Key keyVal = {key} disabled ={disabledLetters.includes(key)}/>
         
 })}
      </div>
      <div className='line3'>
      <Key keyVal = "ENTER" bigKey/>
      {keys3.map((key) => {
           return <Key keyVal = {key} disabled ={disabledLetters.includes(key)}/>
         
 })}
       <Key keyVal = "DELETE" bigKey/>
      </div>
    </div>
  )
}

export default Keyboard