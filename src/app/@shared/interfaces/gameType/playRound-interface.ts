import { LeaderBoard } from '../leaderboard-interface';

export interface PlayRound {
  data?: {
    leader_board?: LeaderBoard[];
    round?: number;
  };
  type?: string;
}
