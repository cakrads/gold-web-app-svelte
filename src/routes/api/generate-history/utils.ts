import type { DailyPrice } from '$lib/services/daily-price';
import { convertSimpleDate } from '$lib/utils/date';

const DAYS_IN_5_YEARS = 365 * 5;

interface IConvertGoldEn {
  date: number;
  dateDMY: string;
  priceInOz: number;
  priceInGr: number;
}

export function convertGoldEn(plain: string[]): IConvertGoldEn[] {
  // plain = ["USD-XAU!,949716,64.9,950580,65.25"]


  const _data = plain[0];
  // data = "USD-XAU!,949716,64.9,950580,65.25";

  // remote "USD-XAU!,
  const plainClean = _data.replace('USD-XAU!,', '');
  // plainClean = "949716,64.9,950580,65.25";

  // Split
  const splitedData = plainClean.split(',');
  // splittedData = ["949716","64.9","950580","65.25"];

  // only focus in last 5 years

  const numberOfDay = DAYS_IN_5_YEARS * 2; // *2 cause 2 array represent date and price in splittedData 
  const focusedData = splitedData.splice(-numberOfDay);

  // even array will be date, and odd array will be price
  const data = convertToDatePrice(focusedData);
  /**
   * data = [
   *    { date: 946716, price: 64.9 },
   *    { date: 950580, price: 65.25 },
   * ]
   */
  return data;
}

function convertToDatePrice(inputArray: string[]) {
  const data: IConvertGoldEn[] = new Array(inputArray.length / 2);

  for (let i = 0; i < inputArray.length; i++) {
    const value = parseFloat(inputArray[i]);

    if (i % 2 === 0) {
      const correctDate = value * 100;
      data[i / 2] = {
        date: correctDate,
        dateDMY: convertSimpleDate(correctDate),
        priceInOz: 0,
        priceInGr: 0,
      };
    } else {
      const index = Math.floor(i / 2);
      const OZ_TO_GR = 0.0321507466;
      data[index].priceInOz = value;
      data[index].priceInGr = +(value * OZ_TO_GR).toFixed(2);
    }
  }

  return data;
}

interface IConvertAntam {
  date: number;
  dateDMY: string;
  price: number;
}

export function convertAntam(inputData: number[][]): IConvertAntam[] {
  return inputData.map(([epochInMili, price]) => {
    const epochInSecond = +(epochInMili / 1000).toFixed(0);
    return {
      date: epochInSecond,
      dateDMY: convertSimpleDate(epochInSecond),
      price,
    };
  });
}


export function combineArrays(goldAntam: IConvertAntam[], goldEn: IConvertGoldEn[]): DailyPrice[] {
  const combinedArray: DailyPrice[] = [];

  goldAntam
    .filter(antamItem => antamItem.date >= goldEn[0].date)
    .forEach((antamItem) => {
      const combinedItem: DailyPrice = {
        id: 0,
        date: antamItem.date,
        sellPrice: antamItem.price,
        sellPriceEn: 0,
        buybackPrice: 0,
        buybackPriceEn: 0,
        changePrice: 0,
        changePriceEn: 0,
        dollarToRupiah: 0,
      };
      const correspondingToGoldEn = goldEn.find(
        (secondItem) => secondItem.dateDMY === antamItem.dateDMY
      );

      if (correspondingToGoldEn) {
        combinedItem.sellPriceEn = correspondingToGoldEn.priceInGr;
      } else {
        combinedItem.sellPriceEn = combinedArray[combinedArray.length - 1]?.sellPriceEn || 0;
      }

      combinedArray.push(combinedItem);
    });

  return combinedArray;
}

// interface MainData {
//   date: number;
//   dateDMY: string;
//   price: number;
//   dateEn: number;
//   priceInOz: number;
//   priceInGr: number;
// }
// export function combineArrays(goldAntam: IConvertAntam[], goldEn: IConvertGoldEn[]): MainData[] {
//   const combinedArray: MainData[] = [];
//   const dailyPrice: DailyPrice[] = [];

//   goldAntam
//     .filter(antamItem => antamItem.date >= goldEn[0].date)
//     .forEach((antamItem) => {
//       const combinedItem: MainData = { ...antamItem } as MainData;
//       const dailyPriceItem: DailyPrice = {
//         id: 0,
//         date: 0,
//         buybackPrice: 0,
//         buybackPriceEn: 0,
//         changePrice: 0,
//         changePriceEn: 0,
//         dollarToRupiah: 0,
//         sellPrice: 0,
//         sellPriceEn: 0,
//       };
//       const correspondingToGoldEn = goldEn.find(
//         (secondItem) => secondItem.dateDMY === antamItem.dateDMY
//       );

//       if (correspondingToGoldEn) {
//         combinedItem.dateEn = correspondingToGoldEn.date;
//         combinedItem.priceInOz = correspondingToGoldEn.priceInOz;
//         combinedItem.priceInGr = correspondingToGoldEn.priceInGr;
//       } else {
//         combinedItem.dateEn = combinedArray[combinedArray.length - 1]?.dateEn || 0;
//         combinedItem.priceInOz = combinedArray[combinedArray.length - 1]?.priceInOz || 0;
//         combinedItem.priceInGr = combinedArray[combinedArray.length - 1]?.priceInGr || 0;
//       }

//       combinedArray.push(combinedItem);
//     });

//   return combinedArray;
// }