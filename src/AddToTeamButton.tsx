import React, { useContext } from "react";
import { ScoreContext, IScoreContext, Player } from "./ScoreContext";

interface AddToTeamButton {
  playerId: number;
  team: 1 | 2;
}

export default function AddToTeamButton(props: AddToTeamButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <button
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
      Team {props.team}
    </button>
  );
}
