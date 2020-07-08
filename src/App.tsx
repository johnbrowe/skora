import React, { useState } from "react";
import { ScoreContext, Player } from "./ScoreContext";
import MatchSetup from "./MatchSetup";
import Match from "./Match";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const Players: Player[] = [
    { id: 1, name: "John", team: null, goals: 0 },
    { id: 2, name: "Magni", team: null, goals: 0 },
    { id: 3, name: "Signar", team: null, goals: 0 },
    { id: 4, name: "Jóannes", team: null, goals: 0 },
    { id: 5, name: "Sigmundur", team: null, goals: 0 },
    { id: 6, name: "Heini", team: null, goals: 0 },
    { id: 7, name: "Ólavur", team: null, goals: 0 },
    { id: 8, name: "Magni", team: null, goals: 0 },
    { id: 9, name: "Tróndur", team: null, goals: 0 },
  ];

  const [players, setPlayer] = useState<Player[]>(Players);

  return (
    <Router>
      <ScoreContext.Provider value={{ players, setPlayer }}>
        <Switch>
          <Route exact path="/">
            <MatchSetup />
          </Route>
          <Route path="/match">
            <Match />
          </Route>
        </Switch>
      </ScoreContext.Provider>
    </Router>
  );
}

export default App;
