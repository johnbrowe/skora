import React, { useState, useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";

export default function Score() {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);
  const [start, setStart] = useState(false);

  const scoreTeam1 = players
    .filter((player) => player.team === 1)
    .reduce((acc, curr) => {
      return acc + curr.goals;
    }, 0);

  const scoreTeam2 = players
    .filter((player) => player.team === 2)
    .reduce((acc, curr) => {
      return acc + curr.goals;
    }, 0);

  return (
    <div className="App" style={{ display: "grid" }}>
      {start && (
        <div>
          Team 1 - {scoreTeam1}
          Team 2 - {scoreTeam2}
        </div>
      )}

      {!start && (
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          Start Match
        </button>
      )}

      <div>
        {players &&
          players.map((thisPlayer) => {
            if (thisPlayer.team === null) {
              return (
                <div key={thisPlayer.id}>
                  <p>{thisPlayer.name}</p>
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
                    Team 1
                  </button>
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
                    Team 2
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
              return (
                <div key={data.id}>
                  <button
                    onClick={() => {
                      const newArray = players.map((player) => {
                        if (data.id === player.id) {
                          return { ...player, goals: data.goals + 1 };
                        }
                        return player;
                      });
                      setPlayer(newArray);
                    }}
                  >
                    {data.name}
                  </button>
                  <p>{data.goals}</p>
                </div>
              );
            }
          })}
        </ul>
        <h1>Team 2</h1>
        <ul>
          {players.map((data) => {
            if (data.team === 2) {
              return (
                <div key={data.id}>
                  <button
                    onClick={() => {
                      const newArray = players.map((player) => {
                        if (data.id === player.id) {
                          return { ...player, goals: data.goals + 1 };
                        }
                        return player;
                      });
                      setPlayer(newArray);
                    }}
                  >
                    {data.name}
                  </button>
                  <p>{data.goals}</p>
                </div>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
