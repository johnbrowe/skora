import React, { useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
import AddGoalButton from "./AddGoalButton";
import { useHistory } from "react-router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Match() {
  let history = useHistory();

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
    <div>
      <button
        css={css`
          margin: 20px;
          padding: 10px;
          color: #fff;
          border: 0;
          background-color: #e56b6f;
        `}
        onClick={() => {
          const resetPlayer = players.map((player) => {
            player.team = null;
            player.goals = 0;

            return player;
          });
          setPlayer(resetPlayer);
          history.push("/");
        }}
      >
        ← Reset match
      </button>
      <div
        css={css`
          padding: 20px;
          display: flex;
          justify-content: space-evenly;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <h2
            css={css`
              color: #6d597a;
              text-align: center;
            `}
          >
            Team 1
          </h2>
          <p
            css={css`
              text-align: center;
              font-size: 50px;
              color: #355070;
            `}
          >
            {scoreTeam1}
          </p>
          <ul
            css={css`
              list-style: none;
              padding: 0 5px;
            `}
          >
            {players.map((data) => {
              if (data.team === 1) {
                return <AddGoalButton player={data} />;
              }
            })}
          </ul>
        </div>
        <div
          css={css`
            flex: 1;
          `}
        >
          <h2
            css={css`
              color: #eaac8b;
              text-align: center;
            `}
          >
            Team 2
          </h2>
          <p
            css={css`
              text-align: center;
              font-size: 50px;
              color: #355070;
            `}
          >
            {scoreTeam2}
          </p>
          <ul
            css={css`
              list-style: none;
              padding: 0;
              padding: 0 5px;
            `}
          >
            {players.map((data) => {
              if (data.team === 2) {
                return <AddGoalButton player={data} />;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
