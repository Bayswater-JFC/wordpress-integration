import fs from 'fs';
import { camelCase, map, mapKeys } from 'lodash';
import fetch from 'node-fetch';
import path from 'path';

const baseUrl = 'http://0.0.0.0:8055';

export const query = async <T = any>(query: string) => {
  const response1 = await fetch(`${baseUrl}/${query}`);
  const objRaw = <any>await response1.json();
  const obj = map(objRaw.data, (obj) => mapKeys(obj, (v, k) => camelCase(k)));
  return obj as T;
};

export const writeHtml = (lines: string[], slug: string) => {
  const html = lines.join('\r\n');
  fs.writeFileSync(path.resolve(__dirname, '..', '__data', `${slug}.html`), html);
};
