// import { useState } from "react";
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
export default function GameBord({onSelectSquare ,board }) {
  // let gameBoard=initialGameBoard;
  // for(const turn of turns){
  //   const{square ,player }=turn;
  //   const {row , col } = square;
  //   gameBoard[row][col] = player ;
  // }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] =activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSympol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> onSelectSquare(rowIndex,colIndex) }
                  disabled={playerSympol !=null}
                  >
                  {playerSympol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
