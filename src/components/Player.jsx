import { useState } from "react";
export default  function Player({name, symbol}){
const [isEditing , setTsEditing]= useState(false);
  function handleEditClick(){
    setTsEditing(true);

  }
  let playerName = <span calssName="player-name">{name}</span>;
  if(isEditing)
    { playerName =<input  type="text" required/>;}
   
  
    return(
        <li>
            <span className="player">
             {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
          </li>
    );
}