import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [players, setPlayers] = useState([]);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect( () => {
    const storedList = JSON.parse(localStorage.getItem('player-list'));
    setPlayerList(storedList);
  },[players])

  const handlePlayers = (player) => {
    let newList = [];
    if(!playerList){
      newList.push(player)
    }
    else{
      const exists = playerList.find(item => item.id === player.id);
      if(!exists){
          newList = [...playerList, player];
      }
      else{
          const remainingPlayers = playerList.filter(pl => pl.id !== player.id);
          newList = [...remainingPlayers, exists];
      }

    }
    setPlayerList(newList)
    localStorage.setItem('player-list', JSON.stringify(newList));
  }


  return (
    <div className="App">
      <Header></Header>
      <div className="grid grid-cols-8">
        <Players players={players} handlePlayers = {handlePlayers}></Players>
        <SideBar playerList = {playerList}></SideBar>
      </div>
    </div>
  );
}

export default App;
