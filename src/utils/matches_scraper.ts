import Scoreboard from '../models/scoreboard';
import Team from '../models/team';
import { Match } from './../models/match';

import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

const URL = 'https://www.afatv.pt/aominuto';

const GAME_STATUS_ONGOING_LOCATOR = 'A DECORRER';
const GAME_STATUS_FINISHED_OR_ONGOING_LOCATOR = ' X ';

const GameStatus = {
  NotStarted: 'NOT_STARTED',
  Ongoing: 'ONGOING',
  Finished: 'FINISHED',
};

type GameStatus = typeof GameStatus[keyof typeof GameStatus];

function inferMatchStatus(rawStatus: string): GameStatus {
  if (!rawStatus) return GameStatus.NotStarted;
  if (rawStatus.includes(GAME_STATUS_ONGOING_LOCATOR))
    return GameStatus.Ongoing;
  if (rawStatus.includes(GAME_STATUS_FINISHED_OR_ONGOING_LOCATOR))
    return GameStatus.Finished;
  return GameStatus.NotStarted;
}

function scrapeResults(html: string) {
  const results = new Array<Match>();
  const $ = cheerio.load(html);

  $("div[id*='listagemResultadosAoMinuto']").each(
    (_index0: number, element0: cheerio.Element) => {
      const sectionTitle = $(element0).find('.sideContentMainTitle').first().text();
      const titleSplit = sectionTitle.split('(');
      const competition = titleSplit[0].trim();
      const startDate = titleSplit[1].replace(')', '').trim();
        
      $(element0)
        .find('.linhaLista')
        .each((_index: number, element: cheerio.Element) => {
          const gameSelector = $(element).find('.golosAoMinutoNomeEquipa');
          const team1: Team = {
            fullName: $(gameSelector[0]).text(),
            shortName: $(gameSelector[1]).text(),
          };
          const team2: Team = {
            fullName: $(gameSelector[2]).text(),
            shortName: $(gameSelector[3]).text(),
          };

          const statusSelector = $(element).find('.resultadoGoloAoMinuto');
          /* .find("div[class*='estado']"); */
          const rawStatus = $(statusSelector).text();

          const inferredStatus = inferMatchStatus(rawStatus);
          let scoreboard: Scoreboard | undefined;
          let startTime: string | undefined;
          switch (inferredStatus) {
            case GameStatus.NotStarted: {
              scoreboard = undefined;
              startTime = rawStatus;
              break;
            }

            default: {
              startTime = undefined;
              const resultSelector = $(element).find('.resultadoCalendario');
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const rawResult = `${$(resultSelector[0]).text()}-${$(
                resultSelector[1]
              ).text()}`;
              const rawScoreboard = rawResult.split('-');
              scoreboard = {
                team1Score: parseInt(rawScoreboard[0]),
                team2Score: parseInt(rawScoreboard[1]),
              };
              break;
            }
          }
          /* console.debug('rawResult: ' + rawResult);
      console.debug('rawStatus: ' + rawStatus);
      console.debug('STATUS: ' + inferredStatus); */
          const match: Match = {
            id: '1',
            team1: team1,
            team2: team2,
            scoreboard: scoreboard,
            status: inferredStatus,
            startTime: startTime,
            competition: competition,
            startDate: startDate,
          };
          results.push(match);
        });
    }
  );

  return results;
}

export async function getLiveScores() {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(URL);

    const pageData = await page.evaluate(() => {
      return document.documentElement.innerHTML;
    });
    const results = scrapeResults(pageData);
    await browser.close();
    return results;
  } catch (error) {
    console.error(error);
  }
}
