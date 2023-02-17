import * as z from 'zod';
import Scoreboard from './scoreboard';
import Team from './team';
import { WithId } from 'mongodb';
import { db } from '../db/db';

const Match = z.object({
  id: z.string(),
  team1: Team,
  team2: Team,
  status: z.string(),
  scoreboard: Scoreboard.optional(),
  startDate: z.string().optional(),
  startTime: z.string().optional(),
  competition: z.string().optional(),
});

export type Match = z.infer<typeof Match>;
export type MatchWithId = WithId<Match>;
export const Matches = db.collection<Match>('matches');
