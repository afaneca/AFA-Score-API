import { Matches } from '../../models/match';

export async function findAll() {
  const result = await Matches.find();
  return result.toArray();
}
