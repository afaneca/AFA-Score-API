import { NextFunction, Request, Response } from 'express';
import { Match } from '../../models/match';
import * as MatchService from '../services/match.service';

const MATCH_LAST_UPDATE_EXPIRATION_TIME_MS = 5 * 24 * 60 * 60 * 1000; // 5 days
/**
 * Every <X time>, delete old match records
 */
export function removeOldMatchRecords() {
  console.debug('removing old data...');
  MatchService.removeOldMatchRecords(MATCH_LAST_UPDATE_EXPIRATION_TIME_MS);
}

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
