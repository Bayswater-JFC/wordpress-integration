import { compact, join } from 'lodash';

export const urlInfo = (caption: string, url: string) => {
  return url === null ? `${caption}: TBD` : `<a href="${url}" rel="noopener" target="_blank">${caption}</a>`;
};

export const personInfo = (person: DataAccess.IContactUsPageCommittee | DataAccess.IGetContactUsPageCoach | DataAccess.ITeamPageOfficial) => {
  const email = (<any>person)?.email ?? null;
  const tags = [null, null];
  if (person.name === null) {
    tags[0] = 'TBD';
  } else if (email === null) {
    tags[0] = person.name;
  } else {
    tags[0] = `<a href="${email}" rel="nofollow">${person.name}</a>`;
  }

  if (person.phone !== null) {
    tags[1] = `<a href="tel:${person.phone}">${person.phone}</a>`;
  }

  return join(compact(tags), ' - ');
};
