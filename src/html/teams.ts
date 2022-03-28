import { getTeamsPageData } from '$lib/dataAccess/getTeamsPageData';
import { writeHtml } from '../util';
import { urlInfo } from './util';

export const teams = async () => {
  const { teams } = await getTeamsPageData();

  const lines: string[] = [];
  lines.push(`<table class="tablepress" style="margin-bottom: 0;">`);
  lines.push(`  <tbody class="row-hover">`);
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const cls = i % 2 === 0 ? 'odd' : 'even';
    lines.push(`    <tr class="row-${i + 1} ${cls}">`);
    lines.push(`      <td class="column-1"><h4>${team.name}</h4></td>`);
    lines.push(`      <td class="column-2">${urlInfo('Season Fixture', team.fixtureUrl)}</td>`);
    lines.push(`      <td class="column-2">${urlInfo('Results', team.resultsUrl)}</td>`);
    lines.push(`      <td class="column-2">${urlInfo('Ladder', team.ladderUrl)}</td>`);
    lines.push(`      <td class="column-5"><a href="${team.url}" target="_self" class="btn small-btn">Team Page</a></td>`);
    lines.push(`    </tr>`);
  }

  lines.push(`  </tbody>`);
  lines.push(`</table>`);

  writeHtml(lines, 'teams');
};
