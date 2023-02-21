import { syncMatchData } from './api/controllers/match.controller';
import app from './app';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */

  // Every 30s, reconcile local match data with remote source
  setInterval(syncMatchData, 30_000);
});
