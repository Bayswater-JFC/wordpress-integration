import { getTeamMatchReportPageData } from '$lib/dataAccess/getTeamMatchReportPageData';
import { writeHtml } from '../util';

export const teamMatchReport = async () => {
  const matchReports = await getTeamMatchReportPageData();

  for (let i = 0; i < matchReports.length; i++) {
    writeHtml([matchReports[i].markup], matchReports[i].slug);
  }
};
