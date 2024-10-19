import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setTsEditing] = useState(false);
  function handleEditClick() {
    setTsEditing((editing)=> !editing);
  }
  let playerName = <span calssName="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Sve" : "Edit"}</button>
    </li>
  );
}
