import React, { useContext } from "react";
import { ScoreContext, IScoreContext, Player } from "./ScoreContext";

interface AddGoalButton {
  player: Player;
}

export default function AddGoalButton(props: AddGoalButton) {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <div key={props.player.id}>
      <button
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
      <p>{props.player.goals}</p>
    </div>
  );
}
