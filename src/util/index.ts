import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const baseUrl = 'http://localhost:8055';

export const query = async <T = any>(query: string) => {
  const response1 = await fetch(`${baseUrl}/${query}`);
  const json = <any>await response1.json();
  return json.data as T;
};

export const writeHtml = (lines: string[], slug: string) => {
  const html = lines.join('\r\n');
  fs.writeFileSync(path.resolve(__dirname, '..', '__data', `${slug}.html`), html);
};
