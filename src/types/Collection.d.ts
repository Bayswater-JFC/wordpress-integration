declare namespace Collection {
  export interface ICalendar {}

  export interface ICommittee {
    id: number;
    role: string;
    firstName: string;
    lastName: string;
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
    id: number;
    teamCode: string;
    role: string;
    lastName: string;
    firstName: string;
    gender: Enums.PersonGenderEnum;
    phone: string;
    email: string;
    privacy: Enums.PrivacyEnum;
  }

  export interface IClubPersonOfTheYear {}

  export interface IClubChampion {}

  export interface IPremiership {}

  export interface ILifeMember {}

  export interface ICommitteeHistory {}

  export interface IBestAndFairest {}
}
