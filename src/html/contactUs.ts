import { getContactUsPageData } from '$lib/dataAccess/getContactUsPageData';
import { writeHtml } from '../util';
import { personInfo } from './util';

export const contactUs = async () => {
  const contactUs = await getContactUsPageData();
  const execCommittee = contactUs.execCommittee;
  const nonExecCommittee = contactUs.nonExecCommittee;
  const coaches = contactUs.coaches;

  const lines: string[] = [];
  lines.push(`<h2>2022 EXECUTIVE COMMITTEE</h2>`);
  lines.push(`<ul>`);
  for (let i = 0; i < execCommittee.length; i++) {
    const member = execCommittee[i];
    lines.push(`  <li><span class="contact">${member.role}: </span><span class="nowrap">${personInfo(member)}</span></li>`);
  }
  lines.push(`</ul>`);
  lines.push(`<h2>2022 GENERAL COMMITTEE MEMBERS</h2>`);
  lines.push(`<ul>`);
  for (let i = 0; i < nonExecCommittee.length; i++) {
    const member = nonExecCommittee[i];
    lines.push(`  <li><span class="contact">${member.role}: </span><span class="nowrap">${personInfo(member)}</span></li>`);
  }
  lines.push(`</ul>`);
  lines.push(`<h2>2022 COACHES</h2>`);
  lines.push(`<ul>`);
  for (let i = 0; i < coaches.length; i++) {
    const coach = coaches[i];
    lines.push(`  <li><span class="contact">${coach.teamName} Coach: </span><span class="nowrap">${personInfo(coach)}</span></li>`);
  }
  lines.push(`</ul>`);
  lines.push(
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.9371551710783!2d145.26563171539826!3d-37.838357079747716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63ba0607a8b73%3A0xf291f345abb41dca!2sBayswater+Junior+Football+Club!5e0!3m2!1sen!2sau!4v1521517748227" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`
  );

  writeHtml(lines, 'contact-us');
};
