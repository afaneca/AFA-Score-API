import { NextFunction, Request, Response } from 'express';
import { Match } from '../../models/match';
import * as MatchService from '../services/match.service';

/**
 * Fetch data from remote source and syncs it with local storage
 */
export async function syncMatchData(): Promise<void> {
  console.debug('sync started');
  await MatchService.syncMatchData();
  console.debug('sync completed');
}

export async function findAll(
  req: Request,
  res: Response<Match[]>,
  next: NextFunction
) {
  try {
    const matches = await MatchService.findAll();
    console.debug('final size: ' + matches.length);
    res.json(matches);
  } catch (error) {
    next(error);
  }
}
