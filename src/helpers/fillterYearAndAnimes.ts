// This function collects the ratings and names of the best cartoons in a given year...

import { ChartItemsType } from "../types/chartItemType";
import { ItemType } from "../types/itemType";

type objItem = {
  [key: string]: ChartItemsType;
};

export const fillterYearAndAnimes = (data: ItemType[]) => {
  let result: objItem = {};

  data.forEach((item) => {
    if (result[`${item.year}`]) {
      result[`${item.year}`] = {
        year: item.year,
        count: (result[`${item.year}`].count += 1),
        animes: [...result[item.year]?.animes, item.title],
      };
    } else if (item.year) {
      result[`${item.year}`] = {
        year: item.year,
        count: 1,
        animes: [item.title],
      };
    }
  });

  let charData = Object.values(result);

  return charData;
};
