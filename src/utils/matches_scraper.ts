import Scoreboard from '../models/scoreboard';
import Team from '../models/team';
import { Match } from './../models/match';

import { readFileSync } from 'fs';
import path from 'path';
import axios from 'axios';

import mockData from '../samples/payload_misc.json';

const URL = 'https://www.afatv.pt/services/goloaominuto/goloaominuto.php';

export const GameStatus = {
  NotStarted: 'NOT_STARTED',
  Ongoing: 'ONGOING',
  Finished: 'FINISHED',
  Unknown: 'UNKNOWN',
};

export const LastGameActivity = {
  None: 'NONE',
  StatusChange: 'STATUS_CHANGED',
  GoalTeam1: 'GOAL_TEAM_1',
  GoalTeam2: 'GOAL_TEAM_2',
};

export type LastGameActivity =
  typeof LastGameActivity[keyof typeof LastGameActivity];

export type GameStatus = typeof GameStatus[keyof typeof GameStatus];

/* NEW METHOD - FETCH DATA DIRECTLY FROM PHP POST REQUEST */
const LOGO_BASE_URL = 'https://www.afatv.pt/img/equipas/';

function extractMatchFromCompetitionData(
  matchesWrapper: any,
  definedStatus: GameStatus | null = null
): Match[] {
  const matches = new Array<Match>();
  Object.values(matchesWrapper).forEach((competitionData: any) => {
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
      if (definedStatus) status = definedStatus;
      else {
        switch (matchData.Estado) {
          case '0': // NOT STARTED
          case '1': {
            // NOT STARTED - LIVE STREAM
            status = GameStatus.NotStarted;
            break;
          }
          case '2': {
            // ONGOING
            status = GameStatus.Ongoing;
            break;
          }
          case '3': {
            // FINISHED
            status = GameStatus.Finished;
            break;
          }
          default: {
            status = GameStatus.Unknown;
            break;
          }
        }
      }

      const currentDate = new Date();
      const match: Match = {
        id: matchData.JogoID,
        team1: team1,
        team2: team2,
        scoreboard: scoreboard,
        status: status,
        startTime: startTime,
        competition: competitionName,
        startDate: startDate,
        createdAt: currentDate,
        updatedAt: currentDate,
        hasRecentActivity: false,
        lastGameActivity: LastGameActivity.None,
      };
      matches.push(match);
    });
  });

  return matches;
}

function parseMatchData(js: any): Match[] {
  /* console.debug('js data: ' + JSON.stringify(js)); */
  const matches = new Array<Match>();
  if (js.data.Jogos)
    matches.push(...extractMatchFromCompetitionData(js.data.Jogos));
  if (js.data.ProximosJogos)
    matches.push(
      ...extractMatchFromCompetitionData(
        js.data.ProximosJogos,
        GameStatus.NotStarted
      )
    );
  return matches;
}

export async function getLiveScores() {
  let matches = new Array<Match>();

  var bodyFormData = new FormData();
  bodyFormData.append('call', 'readResultadosAoMinuto');

  await axios({
    method: 'post',
    url: URL,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response: any) {
      //handle success
      var jsonData = response.data;
      // INJECTING MOCK DATA - FOR DEBUG ONLY
      //jsonData = mockData;
      matches = parseMatchData(jsonData);
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch(function (_err) {
      //handle error
      console.log(_err);
    });

  return matches;
}
