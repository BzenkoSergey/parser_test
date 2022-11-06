import cheerio from 'cheerio';

export const parse = (html: string) => {
  const $ = cheerio.load(html);
  const content = $('#data').html();

  if (!content) {
    throw 'Html content is empty';
  }

  try {
    return JSON.parse(content);
  } catch (e) {
    throw 'Can\'t parse content';
  }
};
