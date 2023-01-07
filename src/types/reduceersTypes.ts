import { ItemType } from "./itemType";

export interface AnimeState {
  topAnime: {
    topAnimeItems: ItemType[];
    loadingTopAnime: boolean;
    errorTopAnime: string;
  };
}
