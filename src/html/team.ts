import { getTeamPageData } from '$lib/dataAccess/getTeamPageData';
import { writeHtml } from '../util';
import { personInfo, urlInfo } from './util';

export const team = async () => {
  const { teams } = await getTeamPageData();

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const lines: string[] = [];
    lines.push(`<div class="team-image-row" />`);
    lines.push(`<div class="col-container">`);
    lines.push(`  <div class="col1">`);
    lines.push(`    <h3 style="margin-top: 10px;">CONTACTS</h3>`);
    lines.push(`    <ul>`);
    for (let j = 0; j < team.officials.length; j++) {
      const official = team.officials[j];
      lines.push(`  <li><b>${official.role}: </b><span class="nowrap">${personInfo(official)}</span></li>`);
    }
    lines.push(`    </ul>`);
    lines.push(`  </div>`);
    lines.push(`  <div class="col2">`);
    lines.push(`    <div style="padding-top: 1em;">`);
    lines.push(`      <h4 style="margin-bottom: 5px;">Training Times</h4>`);
    if (team.trainingTimes.length === 0) {
      lines.push(`      <p style="margin: 0;">TBD</p>`);
    } else {
      for (let j = 0; j < team.trainingTimes.length; j++) {
        lines.push(`      <p style="margin: 0;">${team.trainingTimes[j]}</p>`);
      }
    }
    lines.push(`    </div>`);
    lines.push(`    <div style="padding-top: .5em;">`);
    lines.push(`      <h4 style="margin-bottom: 5px;">Season Information</h4>`);
    lines.push(`      <p style="margin: 0;">${urlInfo('Fixture', team.fixtureUrl)}</p>`);
    lines.push(`      <p style="margin: 0;">${urlInfo('Results', team.resultsUrl)}</p>`);
    lines.push(`      <p style="margin: 0;">${urlInfo('Ladder', team.ladderUrl)}</p>`);
    lines.push(`    </div>`);
    lines.push(`  </div>`);
    lines.push(`</div>`);

    writeHtml(lines, `teams-${team.slug}`);
  }
};
