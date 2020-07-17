/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import { ScoreContext, IScoreContext, Player } from "./ScoreContext";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface AddGoalButton {
  player: Player;
}

export default function AddGoalButton(props: AddGoalButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <li
      css={css`
        width: 100%;
      `}
      key={props.player.id}
    >
      <button
        css={css`
          margin-top: 10px;
          background-color: ${props.player.team === 1 ? "#6D597A" : "#EAAC8B"};
          color: #fff;
          border: 0;
          width: 100%;
          height: 70px;
          font-size: 1.3em;
        `}
        onClick={() => {
          const newArray = players.map((player) => {
            if (props.player.id === player.id) {
              return { ...player, goals: player.goals + 1 };
            }
            return player;
          });
          setPlayer(newArray);
        }}
      >
        {props.player.name}
      </button>
      <p
        css={css`
          text-align: center;
        `}
      >
        {props.player.goals}
      </p>
    </li>
  );
}
