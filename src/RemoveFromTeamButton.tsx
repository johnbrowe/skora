/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface RemoveFromTeamButton {
  playerId: number;
}

export default function RemoveFromTeamButton(props: RemoveFromTeamButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <button
      css={css`
        margin-top: 10px;
        background-color: #e56b6f;
        color: #fff;
        border-radius: 50%;
        border: 0;
        width: 30px;
        height: 30px;
      `}
      onClick={() => {
        const newArray = players.map((player) => {
          if (props.playerId === player.id) {
            return { ...player, team: null };
          }
          return player;
        });

        setPlayer(newArray);
      }}
    >
      -
    </button>
  );
}
