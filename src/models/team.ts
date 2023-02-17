import * as z from 'zod';

const Team = z.object({
  fullName: z.string(),
  shortName: z.string(),
  logoUrl: z.string().optional(),
});

type Team = z.infer<typeof Team>;

export default Team;
