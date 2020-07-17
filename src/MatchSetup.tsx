/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Players from "./Players";
import { useHistory } from "react-router";
import { ReactComponent as Logo } from "./skora-logo.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Team from "./Team";

export default function MatchSetup() {
  let history = useHistory();

  return (
    <div className="App" style={{ display: "grid", margin: "20px" }}>
      <div
        css={css`
          width: 220px;
          margin: auto;
          display: block;
        `}
      >
        <Logo />
      </div>

      <button
        css={css`
          padding: 20px;
          margin: 30px 20px;
          font-size: 2em;
          background-color: #b56576;
          color: white;
          border: 0;
        `}
        onClick={() => {
          history.push("/match");
        }}
      >
        Start Match
      </button>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
        `}
      >
        <Team teamId={1} />
        <Team teamId={2} />
      </div>
      <Players />
    </div>
  );
}
