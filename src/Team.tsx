import React, { useContext } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ScoreContext, IScoreContext } from "./ScoreContext";
import RemoveFromTeamButton from "./RemoveFromTeamButton";

interface Props {
  teamId: number;
}

export default function Team(props: Props) {
  const { players } = useContext<IScoreContext>(ScoreContext);

  return (
    <div>
      <h1>Team {props.teamId}</h1>
      <ul
        css={css`
          list-style: none;
          padding: 0;
        `}
      >
        {players.map((data) => {
          if (data.team === props.teamId) {
            return (
              <li
                css={css`
                  padding-top: 10px;
                  display: flex;
                  justify-content: space-between;
                  width: 200px;
                `}
              >
                <div>{data.name}</div>
                <RemoveFromTeamButton playerId={data.id} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
