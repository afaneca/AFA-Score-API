import { Match, Matches } from './../../models/match';
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

export function removeOldMatchRecords(expirationTimeInMs: number) {
  Matches.deleteMany({
    createdAt: { $lt: new Date(Date.now() - expirationTimeInMs) },
  });
}

export async function syncMatchData() {
  const remoteMatches = await findAllFromRemoteSource();
  /* console.debug('remote matches: ' + remoteMatches); */
  if (!remoteMatches || remoteMatches.length == 1) return;
  remoteMatches.forEach(async (match) => {
    // updates local match if it exists or creates a new one if it doesn't
    console.debug('-- remote match');
    const currentDate = new Date();
    const localMatch = await Matches.findOne<Match | null>({ id: match.id });
    if (localMatch) {
      /* console.debug('has been found locally!'); */
      // found it locally. Check if it needs updates
      if (
        match.scoreboard?.team1Score !== localMatch.scoreboard?.team1Score ||
        match.scoreboard?.team2Score !== localMatch.scoreboard?.team2Score ||
        match.status !== localMatch.status
      ) {
        /* console.debug('has remote changes'); */
        var lastGameActivity = MatchScraper.LastGameActivity.None;
        if (match.status !== localMatch.status)
          lastGameActivity = MatchScraper.LastGameActivity.StatusChange;
        else if (
          (match.scoreboard?.team1Score ?? 0) >
          (localMatch.scoreboard?.team1Score ?? 0)
        ) {
          // Team 1 scored
          lastGameActivity = MatchScraper.LastGameActivity.GoalTeam1;
        } else if (
          (match.scoreboard?.team2Score ?? 0) >
          (localMatch.scoreboard?.team2Score ?? 0)
        ) {
          // Team 2 scored
          lastGameActivity = MatchScraper.LastGameActivity.GoalTeam2;
        } else {
          // Something unexpected happened
        }
        // game has remote changes! sync it
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
              updatedAt: currentDate,
              hasRecentActivity: true,
              lastGameActivity: lastGameActivity,
            },
          }
        );
      } else if (
        localMatch.hasRecentActivity == true &&
        currentDate.getTime() - localMatch.updatedAt.getTime() > 5 * 60 * 1_000
      ) {
        /* console.debug(
          'no remote changes, but hasRecentActivity==true for more than 5 minutes'
        ); */
        // If game has 'hasRecentActivity' flag enabled and last update to it was more than 5 minutes ago, revoke that status
        await Matches.updateOne(
          { id: match.id },
          {
            $set: {
              hasRecentActivity: false,
            },
          }
        );
      }
    } else {
      /* console.debug('new match. add it locally!'); */
      // new match. Add it locally
      await Matches.insertOne(match);
    }
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
