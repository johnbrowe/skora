import React, { useContext } from "react";
import { ScoreContext, IScoreContext } from "./ScoreContext";
import AddToTeamButton from "./AddToTeamButton";

export default function Players() {
  const { players, setPlayer } = useContext<IScoreContext>(ScoreContext);

  return (
    <div>
      {players &&
        players.map((thisPlayer) => {
          if (thisPlayer.team === null) {
            return (
              <div key={thisPlayer.id}>
                <p>{thisPlayer.name}</p>
                <AddToTeamButton playerId={thisPlayer.id} team={1} />
                <AddToTeamButton playerId={thisPlayer.id} team={2} />
              </div>
            );
          }
        })}
    </div>
  );
}
