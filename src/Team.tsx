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
      <h1
        css={css`
          color: ${props.teamId === 1 ? "#6D597A" : "#EAAC8B"};
        `}
      >
        Team {props.teamId}
      </h1>
      <ul
        css={css`
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        {players.map((data) => {
          if (data.team === props.teamId) {
            return (
              <li
                key={data.id}
                css={css`
                  padding-top: 10px;
                  font-size: 1.3em;
                `}
              >
                <div>{data.name}</div>
                <RemoveFromTeamButton playerId={data.id} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
