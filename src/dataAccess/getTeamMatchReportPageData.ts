import { query } from '$lib/util';
import { includes, keys, padStart } from 'lodash';

export const getTeamMatchReportPageData = async () => {
  const teamRaw = await query<Collection.ITeam[]>('items/team');
  const output: DataAccess.IMatchReportPageMatchReport[] = [];
  for (let i = 0; i < teamRaw.length; i++) {
    const team = teamRaw[i];
    const fields = keys(team);
    const teamSlug = team.id.toLowerCase();
    for (let j = 1; ; j++) {
      const roundSlug = `r${padStart(j.toString(), 2, '0')}`;
      const fieldName = `${roundSlug}MatchReport`;
      if (!includes(fields, fieldName)) break;
      output.push({
        slug: `${teamSlug}-${roundSlug}-match-report`,
        title: `${team.name} Round ${j} Match Report`,
        markup: team[fieldName] ?? '<p>Coming soon...</p>',
      });
    }

    for (let j = 1; ; j++) {
      const finalSlug = `f${padStart(j.toString(), 2, '0')}`;
      const fieldName = `${finalSlug}MatchReport`;
      if (!includes(fields, fieldName)) break;
      output.push({
        slug: `${teamSlug}-${finalSlug}-match-report`,
        title: `${team.name} Final (${j}) Match Report`,
        markup: team[fieldName] ?? '<p>Coming soon...</p>',
      });
    }
  }

  return output;
};
