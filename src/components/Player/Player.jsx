import React from "react";

const Player = (props) => {
    const {photo, name, rating, price} = props.player;
    const handlePlayers = props.handlePlayers
  return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>Price: {price}</h3>
          <p>Rating: {rating}</p>
          <div className="card-actions">
            <button onClick={() => handlePlayers(props.player)} className="btn btn-primary">Pick Me</button>
          </div>
        </div>
      </div>
  );
};

export default Player;
