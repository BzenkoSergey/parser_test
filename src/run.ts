import { getHtml } from './get';
import { parse } from './parse';

const url = process.env.URL;

if (!url) {
  throw 'Url is empty';
}

console.log(`Step 1: get html from url:${url}`);
getHtml(url)
  .then(html => {
    console.log('Step 2: parse html');
    return parse(html);
  })
  .then(json => {
    console.log('Parsed result:');
    console.log(json);
  })
  .catch(e => console.error(e));
