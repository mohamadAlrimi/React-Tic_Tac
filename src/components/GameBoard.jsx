const initialGameBoard = [
    [null , null,null],
    [null , null,null],
    [null , null,null],
];
export default function GameBord(){
    return (
        <ol id="game-bored">
            {initialGameBoard.map((row , rowIndex)=> (
                <li key={rowIndex }>
                    <ol>
                        {row.map((playerSympol , colIndex) => (
                            <li key={colIndex}>
                                <button>{playerSympol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}