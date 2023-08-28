import * as cheerio from 'cheerio';

export async function fetchHTML(url: string) {
  const response = await fetch(url);
  return await response.text();
};

export function extractElementContent(html: string, selector: string) {
  const scrap = cheerio.load(html);
  return scrap(selector).html();
}

export function isSameDate(epochTInSecond: number, currentDate: number): boolean {
  const dateA = new Date(epochTInSecond * 1000);
  const dateB = new Date(currentDate);
  return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
}