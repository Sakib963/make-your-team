import React from 'react';

const SideBar = ({playerList}) => {
    let sum = 0;
    if(playerList){
        for(const player of playerList){
            console.log(player.price)
            sum+=player.price;
        }
    }
    return (
        <div className='space-y-3'>
            <h1 className='text-2xl font-bold'>Picked Players</h1>
            {
                playerList ? playerList.map(player => <h1>{player.name}</h1>) : "No Player Selected"
            }
            <p>Total Cost: ${sum ? sum : 0}</p>
        </div>
    );
};

export default SideBar;