import { query } from '$lib/util';
import { includes, keys, padStart } from 'lodash';

export const getTeamMatchReportPageData = async () => {
  const teamRaw = await query<Collection.ITeam[]>('items/team');
  const teams: DataAccess.IMatchReportPageTeam[] = [];
  for (let i = 0; i < teamRaw.length; i++) {
    const team = teamRaw[i];
    const fields = keys(team);
    const matchReports: DataAccess.IMatchReportPageMatchReport[] = [];
    for (let j = 1; ; j++) {
      const roundSlug = `r${padStart(j.toString(), 2, '0')}`;
      const fieldName = `${roundSlug}MatchReport`;
      if (!includes(fields, fieldName)) break;
      if (team[fieldName] !== null) {
        matchReports.push({
          id: roundSlug,
          title: `Round ${j}`,
          markup: team[fieldName],
        });
      }
    }

    for (let j = 1; ; j++) {
      const finalSlug = `f${padStart(j.toString(), 2, '0')}`;
      const fieldName = `${finalSlug}MatchReport`;
      if (!includes(fields, fieldName)) break;
      if (team[fieldName] !== null) {
        matchReports.push({
          id: finalSlug,
          title: `Final ${j}`,
          markup: team[fieldName],
        });
      }
    }

    teams.push({ id: team.id, matchReports });
  }

  return { teams };
};
