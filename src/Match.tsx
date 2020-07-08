import React, { useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
import AddGoalButton from "./AddGoalButton";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Match() {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

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
    <div
      css={css`
        padding: 52px;
        display: flex;
        justify-content: space-evenly;
      `}
    >
      <div>
        <h2>Team 1</h2>
        <p
          css={css`
            text-align: center;
            font-size: 50px;
          `}
        >
          {scoreTeam1}
        </p>
        <ul>
          {players.map((data) => {
            if (data.team === 1) {
              return <AddGoalButton player={data} />;
            }
          })}
        </ul>
      </div>
      <div>
        <h2>Team 2</h2>
        <p
          css={css`
            text-align: center;
            font-size: 50px;
          `}
        >
          {scoreTeam2}
        </p>
        <ul>
          {players.map((data) => {
            if (data.team === 2) {
              return <AddGoalButton player={data} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
