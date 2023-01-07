import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import ReleasedCharte from "../../components/ReleasedCharte/ReleasedCharte";
import { fillterYearAndAnimes } from "../../helpers/fillterYearAndAnimes";
import { getTopAnime } from "../../redux/topAnimy/topAnimeActions";
import { ItemType } from "../../types/itemType";
import { AnimeState } from "../../types/reduceersTypes";
import { GridContainer, GridItem } from "./HomePage.style";

function HomePage() {
  const topAnime = useSelector(
    (state: { anime: AnimeState }) => state.anime.topAnime
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (() =>
      topAnime.topAnimeItems.length === 0 ? dispatch(getTopAnime()) : null)();
  }, [dispatch, topAnime.topAnimeItems.length]);

  return (
    <div>
      {topAnime.loadingTopAnime ? (
        <CircularProgress />
      ) : (
        <>
          <GridContainer container>
            {topAnime.topAnimeItems.map((item: ItemType) => (
              <GridItem key={item.mal_id} item>
                <AnimeCard data={item} />
              </GridItem>
            ))}
          </GridContainer>
          <ReleasedCharte data={fillterYearAndAnimes(topAnime.topAnimeItems)} />
        </>
      )}
    </div>
  );
}

export default HomePage;
