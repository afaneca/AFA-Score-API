import { LastGameActivity, GameStatus } from './matches_scraper';
import admin from 'firebase-admin';
import { Match } from '../models/match';
import serviceAccount from '../secret/firebase-service-account.json';

const defaultFirebaseTopic = 'livescores';
interface PushMessageData {
  title: string;
  message: string;
  matchId: any;
}

export function init() {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key,
      projectId: serviceAccount.project_id,
    }),
  });
}

async function postNotification(message: PushMessageData) {
  const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24,
  };

  admin
    .messaging()
    .sendToTopic(defaultFirebaseTopic, { data: { ...message } }, options)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}

export async function postMatchNotification(
  match: Match,
  lastGameActivity: LastGameActivity
) {
  let title, message;
  switch (lastGameActivity) {
    case LastGameActivity.GoalTeam1: {
      title = 'GOOOLOOO!';
      message = `${match.team1.fullName} [${match.scoreboard?.team1Score}] - ${match.scoreboard?.team2Score} ${match.team2.fullName}`;
      break;
    }
    case LastGameActivity.GoalTeam2: {
      title = 'GOOOLOOO!';
      message = `${match.team1.fullName} ${match.scoreboard?.team1Score} - [${match.scoreboard?.team2Score}] ${match.team2.fullName}`;
      break;
    }
    case LastGameActivity.StatusChange: {
      switch (match.status) {
        case GameStatus.Finished: {
          title = 'Jogo terminado';
          break;
        }
        case GameStatus.Ongoing: {
          title = 'Jogo a decorrer';
          break;
        }
        default: {
          title = 'Atualização do jogo';
          break;
        }
      }
      message = `${match.team1.fullName} ${match.scoreboard?.team1Score} - ${match.scoreboard?.team2Score} ${match.team2.fullName}`;
      break;
    }
    default: {
      title = 'Atualização do jogo';
      message = `${match.team1.fullName} ${match.scoreboard?.team1Score} - ${match.scoreboard?.team2Score} ${match.team2.fullName}`;
      break;
    }
  }
  console.debug(
    `Sending notification to match subscribers: title = ${title} || message = ${message}`
  );
  return postNotification({
    title,
    message,
    matchId: match.id,
  });
}
