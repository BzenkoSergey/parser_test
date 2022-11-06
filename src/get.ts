import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import puppeteer from 'puppeteer-extra';
import { executablePath } from 'puppeteer';

puppeteer.use(StealthPlugin())

export const getHtml = async (url: string) => {
  const chromeOptions = {
    headless: true,
    executablePath: executablePath()
  };

  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: "networkidle0"
    });
  } catch (e) {
    await browser.close();
    throw e;
  }

  const html = await page.$eval('html', element => element.innerHTML);
  await browser.close();
  return html;
};
