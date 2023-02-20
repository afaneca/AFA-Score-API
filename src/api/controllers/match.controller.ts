import { NextFunction, Request, Response } from 'express';
import { Match } from '../../models/match';
import * as MatchService from '../services/match.service';

export async function findAll(
  req: Request,
  res: Response<Match[]>,
  next: NextFunction
) {
  try {
    const matches = await MatchService.findAll();
    res.json(matches);
  } catch (error) {
    next(error);
  }
}
