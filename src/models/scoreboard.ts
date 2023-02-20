import * as z from 'zod';

const Scoreboard = z.object({
  team1Score: z.number(),
  team2Score: z.number(),
});

type Scoreboard = z.infer<typeof Scoreboard>;

export default Scoreboard;