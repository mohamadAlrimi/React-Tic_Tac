import { useState } from "react";
export default function Player({ initialName , symbol , isActive, onChangeName}) {
  const [playerName , setPlayerName]= useState (initialName)
  const [isEditing, setTsEditing] = useState(false);
  function handleEditClick() {
    setTsEditing((editing)=> !editing);
    if(isEditing){
      onChangeName(symbol,playerName);
      
    }
    
  }
  function handleChange(event){
setPlayerName(event.target.value );
  }
  let editablePlayerName = <span calssName="player-name">{playerName }</span>;
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName }  onChange={handleChange}/>;
  }

  return (
    <li className={isActive ?"active": undefined}>
      <span className="player"> 
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Sve" : "Edit"}</button>
    </li>
  );
}
