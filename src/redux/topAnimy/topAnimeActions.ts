import Axios from "../../api/api";
import { Dispatch } from "redux";
import {
  GET_TOP_ANIME_START,
  GET_TOP_ANIME_SUCCESS,
  GET_TOP_ANIME_END,
  GET_TOP_ANIME_FAILD,
} from "./topAnimeTypes";
import { toast } from "react-toastify";

// top anime action
export const getTopAnime: any = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_TOP_ANIME_START });
    const { data } = await Axios.get("/top/anime");
    dispatch({ type: GET_TOP_ANIME_SUCCESS, peload: data.data.slice(0, 20) });
    dispatch({ type: GET_TOP_ANIME_END });
  } catch (error) {
    toast.error(`${error}`);
    dispatch({ type: GET_TOP_ANIME_FAILD, peload: error });
    dispatch({ type: GET_TOP_ANIME_END });
  }
};
