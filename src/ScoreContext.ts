import { createContext } from "react";

export type Player = {
  id: number;
  name: string;
  team: number | null;
  goals: number;
};

export type IScoreContext = {
  players: Player[];
  setPlayer: (value: Player[]) => void;
};

export const ScoreContext = createContext({} as IScoreContext);
