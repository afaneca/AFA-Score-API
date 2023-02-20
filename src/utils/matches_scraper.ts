import Scoreboard from '../models/scoreboard';
import Team from '../models/team';
import { Match } from './../models/match';

import puppeteer from 'puppeteer';

const URL = 'https://www.afatv.pt/aominuto';

const GameStatus = {
  NotStarted: 'NOT_STARTED',
  Ongoing: 'ONGOING',
  Finished: 'FINISHED',
  Unknown: 'UNKNOWN',
};

type GameStatus = typeof GameStatus[keyof typeof GameStatus];

/* NEW METHOD - FETCH DATA DIRECTLY FROM PHP POST REQUEST */
const LOGO_BASE_URL = 'https://www.afatv.pt/img/equipas/';

function parseMatchData(js: any): Match[] {
  const matches = new Array<Match>();
  Object.values(js.data.Jogos).forEach((competitionData: any) => {
    competitionData.forEach((matchData: any) => {
      const competitionName = matchData.Nome;
      const startTime = matchData.Hora;
      const startDate = matchData.Data;
      const team1: Team = {
        fullName: matchData.NomeEquipaCasa,
        shortName: matchData.SiglaCasa,
        logoUrl: `${LOGO_BASE_URL}${matchData.LogoCasa}`,
      };

      const team2: Team = {
        fullName: matchData.NomeEquipaFora,
        shortName: matchData.SiglaFora,
        logoUrl: `${LOGO_BASE_URL}${matchData.LogoFora}`,
      };

      const scoreboard: Scoreboard = {
        team1Score: matchData.GolosEquipaCasa,
        team2Score: matchData.GolosEquipaFora,
      };

      let status: GameStatus;
      switch (matchData.Estado) {
        case '0': // NOT STARTED 
        case '1': { // NOT STARTED - LIVE STREAM
          status = GameStatus.NotStarted;
          break;
        }
        case '2': { // ONGOING
          status = GameStatus.Ongoing;
          break;
        }
        case '3': { // FINISHED
          status = GameStatus.Finished;
          break;
        }
        default: {
          status = GameStatus.Unknown;
          break;
        }
      }

      const match: Match = {
        id: '1',
        team1: team1,
        team2: team2,
        scoreboard: scoreboard,
        status: status,
        startTime: startTime,
        competition: competitionName,
        startDate: startDate,
      };
      matches.push(match);
    });
  });
  return matches;
}

export async function getLiveScores() {
  let matches = new Array<Match>();
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  //await page.setRequestInterception(true);

  page.on('response', async (response) => {
    if (response.url().endsWith('goloaominuto.php')) {
      var js = await response.json();

      matches = parseMatchData(js);
      return matches;
    }
  });
  await page.goto(URL);
  await browser.close();
  return matches;
}
