import { query } from '$lib/util';
import { map, orderBy } from 'lodash';

const mapTeam = (team: Collection.ITeam) => ({
  id: team.id,
  slug: team.id.toLowerCase(),
  url: `2024-${team.id.toLowerCase()}-team`,
  name: team.name,
  fixtureUrl: team.fixtureUrl,
  resultsUrl: team.resultsUrl,
  ladderUrl: team.ladderUrl,
});

export const getTeamsPageData = async () => {
  const teamRaw = await query<Collection.ITeam[]>('items/app_teams');
  const teamsMapped = map(teamRaw, (team) => mapTeam(team));
  const teams = orderBy(teamsMapped, ['id']);

  const output: DataAccess.ITeamsPage = { teams };
  return output;
};
