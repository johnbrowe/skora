import React, { useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface AddToTeamButton {
  playerId: number;
  team: 1 | 2;
}

export default function AddToTeamButton(props: AddToTeamButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <button
      css={css`
        margin-top: 10px;
        background-color: ${props.team === 1 ? "#6D597A" : "#EAAC8B"};
        color: #fff;
        border-radius: 50%;
        border: 0;
        width: 90px;
        height: 90px;
        font-size: 1.3em;
        margin-left: ${props.team === 2 ? "15px" : "0"};
      `}
      onClick={() => {
        const newArray = players.map((player) => {
          if (props.playerId === player.id) {
            return { ...player, team: props.team };
          }
          return player;
        });

        setPlayer(newArray);
      }}
    >
      {props.team}
    </button>
  );
}
