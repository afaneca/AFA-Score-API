import { Matches } from './../../models/match';
import * as MatchScraper from '../../utils/matches_scraper';

/* LOCAL SOURCE */
export async function findAllFromLocalSource() {
  return Matches.find().toArray();
}

/* REMOTE SOURCE */
export async function findAllFromRemoteSource() {
  return MatchScraper.getLiveScores();
}

/* AGGREGATED */

export async function syncMatchData() {
  const remoteMatches = await findAllFromRemoteSource();
  /* console.debug('remote matches: ' + remoteMatches); */
  if (!remoteMatches || remoteMatches.length == 1) return;
  remoteMatches.forEach(async (match) => {
    // updates local match if it exists or creates a new one if it doesn't
    await Matches.updateOne(
      { id: match.id },
      {
        $set: {
          id: match.id,
          team1: match.team1,
          team2: match.team2,
          scoreboard: match.scoreboard,
          competition: match.competition,
          startDate: match.startDate,
          startTime: match.startTime,
          status: match.status,
        },
      },
      { upsert: true }
    );
  });
}

/**
 * Fetches a list of matches from local storage.
 * If list is empty, tries to fetch them from remote location.
 * @returns a list of matches
 */
export async function findAll() {
  const localMatches = await findAllFromLocalSource();
  console.debug('local size: ' + localMatches.length);
  if (localMatches.length < 1) {
    console.debug('get from remote');
    return findAllFromRemoteSource();
  }

  return localMatches;
}
