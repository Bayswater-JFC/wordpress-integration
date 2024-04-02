import { query } from '$lib/util';
import { filter, includes, keyBy, keys, map, orderBy } from 'lodash';
import { execSortHash, mapEmail, mapName, mapPhone, nonExecSortHash, officialSortHash, orderByIt } from './util';

const mapCommittee = (member: Collection.ICommittee) => ({
  role: member.role,
  name: mapName(member),
  email: mapEmail(member.email, member.privacy),
  phone: mapPhone(member.phone, member.privacy),
});

const mapOfficial = (official: Collection.ITeamOfficial, teamGrouped: { [key: string]: Collection.ITeam }) => ({
  role: official.role,
  name: mapName(official),
  phone: mapPhone(official.phone, official.privacy),
  teamId: official.teamId,
  teamName: teamGrouped[official.teamId]?.name ?? null,
});

export const getContactUsPageData = async () => {
  const committeeRaw = await query<Collection.ICommittee[]>('items/app_committee');
  const execCommitteeRaw = filter(committeeRaw, ({ role }) => includes(keys(execSortHash), role));
  const nonExecCommitteeRaw = filter(committeeRaw, ({ role }) => !includes(keys(execSortHash), role));
  const execCommitteeSorted = orderBy(execCommitteeRaw, (member) => orderByIt(member, execSortHash));
  const execCommittee = map(execCommitteeSorted, (member) => mapCommittee(member));
  const nonExecCommitteeSorted = orderBy(nonExecCommitteeRaw, (member) => orderByIt(member, nonExecSortHash));
  const nonExecCommittee = map(nonExecCommitteeSorted, (member) => mapCommittee(member));

  const teamRaw = await query<Collection.ITeam[]>('items/app_teams');
  const teamGrouped = keyBy(teamRaw, 'id');
  const officialsRaw = await query<Collection.ITeamOfficial[]>('items/app_team_officials');
  const officialsSorted = orderBy(officialsRaw, (member) => orderByIt(member, officialSortHash));
  const officialsMapped = map(officialsSorted, (official) => mapOfficial(official, teamGrouped));

  const coachesRaw = filter(officialsMapped, ({ role, teamId }) => role === 'Head Coach' && teamId !== null);
  const coaches = orderBy(coachesRaw, ['teamId', 'lastName', 'firstName']);

  const output: DataAccess.IContactUsPage = { execCommittee, nonExecCommittee, coaches };
  return output;
};
