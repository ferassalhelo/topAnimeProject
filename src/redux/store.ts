import { animeReducer } from "./topAnimy/topAnimeReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  anime: animeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

