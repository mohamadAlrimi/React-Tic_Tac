export default function GameOver(){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner } Won!</p>}
            {!winner && <p>{winner }  It&apos;s a draw</p>}
            <p><button>Rematch!</button></p>
        </div>
    );
}