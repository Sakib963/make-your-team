import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = (props) => {
 const {players} = props;
 const handlePlayers = props.handlePlayers
  return (
    <div className="my-8 mx-10 col-span-6">
      <h1 className="text-3xl font-bold text-center">Pick Your Players</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {
        players.map(player => <Player player={player} key={player.id} handlePlayers = {handlePlayers}></Player>)
      }
      </div>
    </div>
  );
};

export default Players;
