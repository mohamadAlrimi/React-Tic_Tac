export default  function Player({name, symbol}){
    return(
        <li>
            <span className="player">
              <span calssName="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
          </li>
    );
}