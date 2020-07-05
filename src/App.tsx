import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Player {
  id: number;
  name: string;
  team: number | null;
  goals: number;
}

function App() {
  const aPlayers: Player[] = [
    { id: 1, name: "John", team: null, goals: 0 },
    { id: 2, name: "Magni", team: null, goals: 0 },
    { id: 3, name: "Signar", team: null, goals: 0 },
    { id: 4, name: "Jóannes", team: null, goals: 0 },
  ];
  const [players, setPlayer] = useState<Player[]>(aPlayers);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  return (
    <div className="App">
      <p>{team1Score}</p>
      <button
        onClick={() => {
          setTeam1Score(team1Score + 1);
        }}
      >
        Score team 1
      </button>
      <p>{team2Score}</p>

      <button
        onClick={() => {
          setTeam2Score(team2Score + 1);
        }}
      >
        Score team 2
      </button>

      <div>
        <br />
        <br />
        {players &&
          players.map((thisPlayer) => {
            if (thisPlayer.team === null) {
              return (
                <div key={thisPlayer.id}>
                  <button
                    onClick={() => {
                      const newArray = players.map((player) => {
                        if (thisPlayer.id === player.id) {
                          return { ...player, team: 1 };
                        }
                        return player;
                      });
                      setPlayer(newArray);
                    }}
                  >
                    1
                  </button>
                  {thisPlayer.name}
                  <button
                    onClick={() => {
                      const newArray = players.map((player) => {
                        if (thisPlayer.id === player.id) {
                          return { ...player, team: 2 };
                        }
                        return player;
                      });
                      setPlayer(newArray);
                    }}
                  >
                    2
                  </button>
                </div>
              );
            }
          })}
        <br />
        <br />
        <h1>Team 1</h1>
        <ul>
          {players.map((data) => {
            if (data.team === 1) {
              return <li onClick={() => {}}>{data.name}</li>;
            }
          })}
        </ul>
        <h1>Team 2</h1>
        <ul>
          {players.map((data) => {
            if (data.team === 2) {
              return <li>{data.name}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
