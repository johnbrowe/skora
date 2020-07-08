import React, { useContext } from "react";
import { ScoreContext, IScoreContext, Player } from "./ScoreContext";

interface AddToTeamButton {
  playerId: number;
}

export default function AddToTeamButton(props: AddToTeamButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <button
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
