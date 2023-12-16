import React, { useContext } from 'react';
import { AppContext } from "../App";

const Key = ({keyVal,bigKey,disabled}) => {


    const {onSelectLetter,onDeleteLetter,onEnterLetter} = useContext(AppContext);

    const selectLetter = () => {

        if (keyVal === "ENTER") {
            onEnterLetter(); 
        }
        else if (keyVal === "DELETE") {
            onDeleteLetter();
        }
        
        else {
            onSelectLetter(keyVal);
        }
    }


    return ( 
        <div className='key' id = {bigKey ? "big":disabled && "disabled"} onClick={selectLetter}>
            {keyVal}
        </div>
     );
}
 
export default Key;