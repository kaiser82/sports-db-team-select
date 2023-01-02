import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({ players, cart, setCart }) => {
    // console.log(players)
    return (
        <div className='players'>

            {
                players.map(player => <Player player={player} key={player.idPlayer} cart={cart} setCart={setCart}></Player>)
            }
        </div>
    );
};

export default Players;