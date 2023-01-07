import {
  GET_TOP_ANIME_END,
  GET_TOP_ANIME_FAILD,
  GET_TOP_ANIME_START,
  GET_TOP_ANIME_SUCCESS,
} from "./topAnimeTypes";
import { reduxActionType } from "../../types/reduxActionsType";
import { AnimeState } from "../../types/reduceersTypes";

const STATE: AnimeState = {
  topAnime: {
    topAnimeItems: [],
    loadingTopAnime: false,
    errorTopAnime: "",
  },
};

export const animeReducer = (state = STATE, action: reduxActionType) => {
  switch (action.type) {
    // top prosucts
    case GET_TOP_ANIME_START:
      return {
        ...state,
        topAnime: { ...state.topAnime, loadingTopAnime: true },
      };
    case GET_TOP_ANIME_SUCCESS:
      return {
        ...state,
        topAnime: { ...state.topAnime, topAnimeItems: action.peload },
      };
    case GET_TOP_ANIME_FAILD:
      return {
        ...state,
        topAnime: { ...state.topAnime, errorTopAnime: action.peload },
      };
    case GET_TOP_ANIME_END:
      return {
        ...state,
        topAnime: { ...state.topAnime, loadingTopAnime: false },
      };

    default:
      return state;
  }
};
