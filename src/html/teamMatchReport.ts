import { getTeamMatchReportPageData } from '$lib/dataAccess/getTeamMatchReportPageData';
import { writeHtml } from '../util';

export const teamMatchReport = async () => {
  const { teams } = await getTeamMatchReportPageData();

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const lines: string[] = [];
    lines.push(`<script type="text/javascript">`);
    lines.push(`  jQuery(document).ready(function() {	`);
    for (let j = 0; j < team.matchReports.length; j++) {
      const matchReport = team.matchReports[j];
      const prefix = j === 0 ? 'if' : 'else if';
      lines.push(`    ${prefix} (window.location.search.includes("id=${matchReport.id}")) jQuery("#${matchReport.id}").show();`);
    }
    lines.push(`    else jQuery("#not-found").show();`);

    lines.push(`  })`);
    lines.push(`</script>`);
    for (let j = 0; j < team.matchReports.length; j++) {
      const matchReport = team.matchReports[j];
      lines.push(`<div id="${matchReport.id}" style="display: none;">`);
      lines.push(`  <h3>${matchReport.title}</h3>`);
      lines.push(matchReport.markup);
      lines.push(`</div>`);
    }
    lines.push(`<div id="not-found" style="display: none;">`);
    lines.push(`  <h3>Not Found</h3>`);
    lines.push(`<p>Sorry, we couldn't find a matching match report.</p>`);
    lines.push(`</div>`);

    writeHtml(lines, `teams-${team.id}-match-report`);
  }
};
