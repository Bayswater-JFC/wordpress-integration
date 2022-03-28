import { compact, join } from 'lodash';

const president = 'President';
const vicePresident = 'Vice President';
const secretary = 'Secretary';
const treasurer = 'Treasurer';
const registrar = 'Registrar';
const auskickCoordinator = 'Auskick Coordinator';
const sponsorshipAndAwardsCoordinator = 'Sponsorship & Awards Coordinator';
const headTrainer = 'Head Trainer';
const grantsCoordinator = 'Grants Coordinator';
const merchandiseAndUniformCoordinator = 'Merchandise & Uniform Coordinator';
const websiteAdministrator = 'Website Administrator';
const childSafetyOfficer = 'Child Safety Officer';
const schoolLiaisonOfficer = 'School Liaison Officer';
const facilityManagement = 'Facility Management';
const awardsCoordinator = 'Awards Coordinator';
const generalCommittee = 'General Committee';

export const execSortHash = { [president]: '01', [vicePresident]: '02', [secretary]: '03', [treasurer]: '04', [registrar]: '05' };

export const nonExecSortHash = {
  [auskickCoordinator]: '01',
  [sponsorshipAndAwardsCoordinator]: '02',
  [awardsCoordinator]: '02',
  [childSafetyOfficer]: '03',
  [headTrainer]: '04',
  [facilityManagement]: '05',
  [grantsCoordinator]: '06',
  [merchandiseAndUniformCoordinator]: '07',
  [schoolLiaisonOfficer]: '08',
  [websiteAdministrator]: '09',
  [generalCommittee]: '10',
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
