import { LeaderBoard } from '../leaderboard-interface';

export interface GameReset {
  numbers?: Array<Number>;
  players?: LeaderBoard;
  round?: number;
  total_score?: number;
  type?: string;
  winner?: LeaderBoard;
}
