import React, { useState, useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
import Players from "./Players";
import RemoveFromTeamButton from "./RemoveFromTeamButton";
import { useHistory } from "react-router";

export default function MatchSetup() {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);
  let history = useHistory();

  return (
    <div className="App" style={{ display: "grid" }}>
      <button
        onClick={() => {
          history.push("/match");
        }}
      >
        Start Match
      </button>

      <div>
        <Players />

        <br />
        <br />
        <h1>Team 1</h1>
        <ul>
          {players.map((data) => {
            if (data.team === 1) {
              return (
                <li>
                  {data.name} <RemoveFromTeamButton playerId={data.id} />
                </li>
              );
            }
          })}
        </ul>
        <h1>Team 2</h1>
        <ul>
          {players.map((data) => {
            if (data.team === 2) {
              return (
                <li>
                  {data.name} <RemoveFromTeamButton playerId={data.id} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
