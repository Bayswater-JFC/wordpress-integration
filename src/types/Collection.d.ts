declare namespace Collection {
  export interface ICalendar {}

  export interface ICommittee {
    id: string;
    role: string;
    lastName: string;
    firstName: string;
    gender: Enums.PersonGenderEnum;
    phone: string;
    email: string;
    privacy: Enums.PrivacyEnum;
  }

  export interface ITeam {
    id: string;
    topAge: number;
    name: string;
    startDate: string;
    endDate: string;
    gender: Enums.TeamGenderEnum;
    trainingTime: string;
    fixtureUrl: string;
    resultsUrl: string;
    ladderUrl: string;
  }

  export interface ITeamOfficial {
    id: string;
    teamId: string;
    role: string;
    lastName: string;
    firstName: string;
    gender: Enums.PersonGenderEnum;
    phone: string;
    email: string;
    privacy: Enums.PrivacyEnum;
  }

  export interface IClubPersonOfTheYear {
    id: string;
    year: string;
    lastName: string;
    firstName: string;
  }

  export interface IClubChampion {
    id: string;
    year: string;
    lastName: string;
    firstName: string;
  }

  export interface IPremiership {
    id: string;
    year: string;
    teamName: string;
    division: string;
    competition: string;
  }

  export interface ILifeMember {
    id: string;
    year: string;
    lastName: string;
    firstName: string;
  }

  export interface ICommitteeHistory {
    id: string;
    year: string;
    role: string;
    lastName: string;
    firstName: string;
  }

  export interface IBestAndFairest {
    id: string;
    year: string;
    teamName: string;
    lastName: string;
    firstName: string;
  }
}
