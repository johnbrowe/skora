import React, { useContext } from "react";
import Players from "./Players";
import { useHistory } from "react-router";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Team from "./Team";

export default function MatchSetup() {
  let history = useHistory();

  return (
    <div className="App" style={{ display: "grid" }}>
      <button
        onClick={() => {
          history.push("/match");
        }}
      >
        Start Match
      </button>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        `}
      >
        <Players />
        <Team teamId={1} />
        <Team teamId={2} />
      </div>
    </div>
  );
}
