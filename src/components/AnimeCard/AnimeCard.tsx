import { CardActionArea } from "@mui/material";
import { ItemType } from "../../types/itemType";
import {
  BoldText,
  CardBox,
  ContentCard,
  Rank,
  Text,
  Title,
} from "./AnimeCard.style";
import { useState } from "react";
import Img from "../Img/Img";

interface IPops {
  data: ItemType;
}

const AnimeCard = ({ data }: IPops) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <CardActionArea
      // onClick={() => setActive(!active)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      <CardBox
        sx={
          active
            ? {
                position: "absolute",
                height: "420px",
                width: "300px",
              }
            : null
        }
      >
        <Img src={data.images.jpg.image_url} />
        <ContentCard>
          <Title>{data.title}</Title>
          {active ? (
            <>
              <Text>
                <BoldText>Release:</BoldText> {data.aired.string.split("to")[0]}
              </Text>
              <Text>
                <BoldText>Lastest: </BoldText>
                {data.aired.string.split("to")[1] || "now"}
              </Text>
              <Text>
                <BoldText>Rating : </BoldText> {data.rating}
              </Text>
            </>
          ) : null}
        </ContentCard>
        <Rank>{data.rank}</Rank>
      </CardBox>
    </CardActionArea>
  );
};

export default AnimeCard;
