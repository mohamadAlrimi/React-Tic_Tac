import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const PLAYERS ={
  X:"Player 1",
  O:"Player 2"
}
// const WINNING_COMBINATIONS =[
//   {row:0 ,col:0}
//   {row:0 ,col:1}
//   {row:0 ,col:2}
// ];
function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array=>[...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveWinner( gameBoard ,players){
  let winner = null;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymobl =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymobl =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymobl =
      gameBoard[combinations[2].row][combinations[2].column];
    if (
      firstSquareSymobl &&
      firstSquareSymobl === secondSquareSymobl &&
      firstSquareSymobl === thirdSquareSymobl
    ) {
      winner = players[firstSquareSymobl];
    }
  }
  return winner;
}
function App() {
  const [players,setPlayers]=useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const[hasWinner,setHasWinner]=useState(false);
  const activePlayer = deriveActivePlayer(gameTurns);
  // let gameBoard = [...initialGameBoard.map(array=>[...array])];
  // for (const turn of gameTurns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  // let currentPlayer ="X";
  //     if( gameTurns .length >0 && gameTurns [0].player ==="X"){
  //       currentPlayer="O";
  //     }
  // const [activePlayer, setActivePlayer] = useState("X");
  // let winner = null;
  // for (const combinations of WINNING_COMBINATIONS) {
  //   const firstSquareSymobl =
  //     gameBoard[combinations[0].row][combinations[0].column];
  //   const secondSquareSymobl =
  //     gameBoard[combinations[1].row][combinations[1].column];
  //   const thirdSquareSymobl =
  //     gameBoard[combinations[2].row][combinations[2].column];
  //   if (
  //     firstSquareSymobl &&
  //     firstSquareSymobl === secondSquareSymobl &&
  //     firstSquareSymobl === thirdSquareSymobl
  //   ) {
  //     winner = players[firstSquareSymobl];
  //   }
  // }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      // let currentPlayer ="X";
      // if( prevTurns.length >0 && prevTurns[0].player ==="X"){
      //   currentPlayer="O";
      // }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function handleRestart(){
 setGameTurns([]);
  }
  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers =>{
     return{ ...prevPlayers,
      [symbol]:newName};
    })

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}  onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
