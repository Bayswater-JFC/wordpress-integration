import { compact, join } from 'lodash';

const president = 'President';
const vicePresident = 'Vice President';
const secretary = 'Secretary';
const treasurer = 'Treasurer';
const registrar = 'Registrar';
const auskickCoordinator = 'Auskick Coordinator';
const sponsorshipAndAwardsCoordinator = 'Sponsorship & Awards Coordinator';
const sponsorshipCoordinator = 'Sponsorship Coordinator';
const headTrainer = 'Head Trainer';
const grantsCoordinator = 'Grants Coordinator';
const merchandiseAndUniformCoordinator = 'Merchandise & Uniform Coordinator';
const websiteAdministrator = 'Website Administrator';
const childSafetyOfficer = 'Child Safety Officer';
const schoolLiaisonOfficer = 'School Liaison Officer';
const facilityManagement = 'Facility Management';
const awardsCoordinator = 'Awards Coordinator';
const seniorDelegate = 'Senior Delegate';
const generalCommittee = 'General Committee';

const headCoach = 'Head Coach';
const assistantCoach = 'Assistant Coach';
const teamManager = 'Team Manager';
const trainer = 'Trainer';

export const execSortHash = { [president]: '01', [vicePresident]: '02', [secretary]: '03', [treasurer]: '04', [registrar]: '05' };

export const nonExecSortHash = {
  [auskickCoordinator]: '01',
  [sponsorshipAndAwardsCoordinator]: '02',
  [sponsorshipCoordinator]: '03',
  [awardsCoordinator]: '04',
  [childSafetyOfficer]: '05',
  [headTrainer]: '06',
  [facilityManagement]: '07',
  [grantsCoordinator]: '08',
  [seniorDelegate]: '09',
  [merchandiseAndUniformCoordinator]: '10',
  [schoolLiaisonOfficer]: '11',
  [websiteAdministrator]: '12',
  [generalCommittee]: '13',
};

export const officialSortHash = { [headCoach]: '01', [assistantCoach]: '02', [teamManager]: '03', [trainer]: '04' };

export const orderByIt = (personWithRole: { lastName: string; firstName: string; role: string }, sortHash: { [key: string]: string }) => {
  return (sortHash[personWithRole.role] ?? '99') + ' ' + personWithRole.lastName + ' ' + personWithRole.firstName;
};

export const mapPhone = (phone: string, privacySetting: Enums.PrivacyEnum) => {
  return privacySetting === 'Display Both' || privacySetting === 'Display Phone Only' ? phone : null;
};

export const mapEmail = (email: string, privacySetting: Enums.PrivacyEnum) => {
  return privacySetting === 'Display Both' || privacySetting === 'Display Email Only' ? email : null;
};

export const mapName = (person: Collection.ITeamOfficial | Collection.ICommittee) => {
  if (person.firstName === null && person.lastName === null) {
    return null;
  }

  return join(compact([person.firstName, person.lastName]), ' ');
};

export const stringToArray = (string: string) => {
  const trimmedString = (string ?? '').trim();
  const array = trimmedString === '' ? [] : trimmedString.split('\n');
  return array;
};
