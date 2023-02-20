import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import matches from './matches.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/matches', matches);

export default router;
