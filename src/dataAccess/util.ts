import { compact, join } from 'lodash';

const president = 'President';
const vicePresident = 'Vice President';
const secretary = 'Secretary';
const treasurer = 'Treasurer';
const registrar = 'Registrar';

const auskickCoordinator = 'Auskick Coordinator';
const sponsorshipCoordinator = 'Sponsorship Coordinator';
const marketingCoordinator = 'Marketing Coordinator';
const childSafetyOfficer = 'Child Safety Officer';
const headTrainer = 'Head Trainer';
const facilityManagement = 'Facility Management';
const grantsCoordinator = 'Grants Coordinator';
const seniorLiaison = 'Senior Liaison';
const merchandiseAndUniformCoordinator = 'Merchandise & Uniform Coordinator';
const barManager = 'Bar Manager';
const websiteAdministrator = 'Website Administrator';
const generalCommittee = 'General Committee';

const headCoach = 'Head Coach';
const assistantCoach = 'Assistant Coach';
const teamManager = 'Team Manager';
const trainer = 'Trainer';

export const execSortHash = { [president]: '01', [vicePresident]: '02', [secretary]: '03', [treasurer]: '04', [registrar]: '05' };

export const nonExecSortHash = {
  [auskickCoordinator]: '01',
  [childSafetyOfficer]: '02',
  [headTrainer]: '03',
  [seniorLiaison]: '04',
  [facilityManagement]: '05',
  [marketingCoordinator]: '06',
  [sponsorshipCoordinator]: '07',
  [grantsCoordinator]: '08',
  [merchandiseAndUniformCoordinator]: '09',
  [websiteAdministrator]: '10',
  [barManager]: '11',
  [generalCommittee]: '12',
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
