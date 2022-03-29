declare namespace DataAccess {
  export interface IContactUsPage {
    execCommittee: IContactUsPageCommittee[];
    nonExecCommittee: IContactUsPageCommittee[];
    coaches: IGetContactUsPageCoach[];
  }

  export interface IContactUsPageCommittee {
    role: string;
    name: string;
    phone: string;
    email: string;
  }

  export interface IGetContactUsPageCoach {
    role: string;
    name: string;
    phone: string;
    teamCode: string;
    teamName: string;
  }

  export interface ITeamsPage {
    teams: ITeamsPageTeam[];
  }

  export interface ITeamsPageTeam {
    id: string;
    slug: string;
    url: string;
    name: string;
    fixtureUrl: string;
    resultsUrl: string;
    ladderUrl: string;
  }

  export interface ITeamPage {
    teams: ITeamPageTeam[];
  }

  export interface ITeamPageTeam {
    id: string;
    slug: string;
    name: string;
    officials: ITeamPageOfficial[];
    trainingTimes: string[];
    fixtureUrl: string;
    resultsUrl: string;
    ladderUrl: string;
    matchReports: ITeamPageMatchReport[];
  }

  export interface ITeamPageMatchReport {
    url: string;
    title: string;
  }

  export interface ITeamPageOfficial {
    role: string;
    name: string;
    phone: string;
    email: string;
  }

  export interface IPremiershipsPage {
    premierships: ITeamPageTeam[];
  }

  export interface IPremiershipsPagePremiership {
    year: string;
    teamName: string;
    division: string;
    competition: string;
  }

  export interface IBestAndFairestPage {
    boyWinners: IBestAndFairestPageWinner[];
    girlWinners: IBestAndFairestPageWinner[];
  }

  export interface IBestAndFairestPageWinner {
    year: string;
    teamName: string;
    winnerName: string;
  }

  export interface IClubChampionPage {
    boyWinners: IBestAndFairestPageWinner[];
    girlWinners: IBestAndFairestPageWinner[];
  }

  export interface IClubChampionPageWinner {
    year: string;
    teamName: string;
    winnerName: string;
  }

  export interface IMatchReportPage {
    teams: IMatchReportPageTeam[];
  }

  export interface IMatchReportPageTeam {
    id: string;
    matchReports: IMatchReportPageMatchReport[];
  }

  export interface IMatchReportPageMatchReport {
    id: string;
    title: string;
    markup: string;
  }
}
