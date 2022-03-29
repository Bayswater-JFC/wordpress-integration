import { query } from '$lib/util';
import { groupBy, includes, keys, map, orderBy, padStart } from 'lodash';
import { mapEmail, mapName, mapPhone, officialSortHash, orderByIt, stringToArray } from './util';

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
  matchReports: mapMatchReports(team),
});

const mapMatchReports = (team: Collection.ITeam) => {
  const output: DataAccess.ITeamPageMatchReport[] = [];
  const fields = keys(team);
  const teamSlug = team.id.toLowerCase();
  for (let j = 1; ; j++) {
    const roundSlug = `r${padStart(j.toString(), 2, '0')}`;
    const fieldName = `${roundSlug}MatchReport`;
    if (!includes(fields, fieldName)) break;
    if (team[fieldName] !== null) {
      output.push({
        url: `${teamSlug}-${roundSlug}-match-report`,
        title: `${team.name} Round ${j} Match Report`,
      });
    }
  }

  for (let j = 1; ; j++) {
    const finalSlug = `f${padStart(j.toString(), 2, '0')}`;
    const fieldName = `${finalSlug}MatchReport`;
    if (!includes(fields, fieldName)) break;
    if (team[fieldName] !== null) {
      output.push({
        url: `${teamSlug}-${finalSlug}-match-report`,
        title: `${team.name} Round ${j} Match Report`,
      });
    }
  }

  return output;
};

export const getTeamPageData = async () => {
  const officialsRaw = await query<Collection.ITeamOfficial[]>('items/teamOfficial');
  const officialsSorted = orderBy(officialsRaw, (member) => orderByIt(member, officialSortHash));
  const officialsGrouped = groupBy(officialsSorted, 'teamCode');

  const teamRaw = await query<Collection.ITeam[]>('items/team');
  const teamsMapped = map(teamRaw, (team) => mapTeam(team, officialsGrouped));
  const teams = orderBy(teamsMapped, ['id']);

  const output: DataAccess.ITeamPage = { teams };
  return output;
};
