import { query } from '$lib/util';
import { groupBy, map, orderBy } from 'lodash';
import { mapEmail, mapName, mapPhone, stringToArray } from './util';

const mapOfficial = (official: Collection.ITeamOfficial) => ({
  role: official.role,
  name: mapName(official),
  phone: mapPhone(official.phone, official.privacy),
  email: mapEmail(official.email, official.privacy),
});

const mapTeam = (team: Collection.ITeam, officialsGrouped: { [key: string]: Collection.ITeamOfficial[] }) => ({
  id: team.id,
  slug: team.id.toLowerCase(),
  name: team.name,
  officials: map(officialsGrouped[team.id], mapOfficial),
  trainingTimes: stringToArray(team.trainingTime),
  fixtureUrl: team.fixtureUrl,
  resultsUrl: team.resultsUrl,
  ladderUrl: team.ladderUrl,
});

export const getTeamPageData = async () => {
  const officialsRaw = await query<Collection.ITeamOfficial[]>('items/teamOfficial');
  const officialsGrouped = groupBy(officialsRaw, 'teamCode');

  const teamRaw = await query<Collection.ITeam[]>('items/team');
  const teamsMapped = map(teamRaw, (team) => mapTeam(team, officialsGrouped));
  const teams = orderBy(teamsMapped, ['id']);

  const output: DataAccess.ITeamPage = { teams };
  return output;
};
