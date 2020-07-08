import React, { useState } from "react";
import Score from "./Score";
import { ScoreContext, Player } from "./ScoreContext";

function App() {
  const Players: Player[] = [
    { id: 1, name: "John", team: null, goals: 0 },
    { id: 2, name: "Magni", team: null, goals: 0 },
    { id: 3, name: "Signar", team: null, goals: 0 },
    { id: 4, name: "Jóannes", team: null, goals: 0 },
  ];

  const [players, setPlayer] = useState<Player[]>(Players);

  return (
    <ScoreContext.Provider value={{ players, setPlayer }}>
      <Score />
    </ScoreContext.Provider>
  );
}

export default App;
