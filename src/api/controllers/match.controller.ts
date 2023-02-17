import { NextFunction, Request, Response } from 'express';
import { MatchWithId } from '../../models/match';
import * as MatchService from '../services/match.service';

export async function findAll(
  req: Request,
  res: Response<MatchWithId[]>,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  next: NextFunction
) {
  try {
    const matches = await MatchService.findAll();
    res.json(matches);
  } catch (error) {
    next(error);
  }
}
