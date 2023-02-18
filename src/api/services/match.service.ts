import * as MatchScraper from '../../utils/matches_scraper';

export async function findAll() {
  /* await Matches.find();
  return result.toArray(); */
  
  const result = MatchScraper.getLiveScores();

  return result;
}
