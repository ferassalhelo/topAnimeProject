// Style properties can be written into sx{} , but I prefer this method to separate the style as much as possible...

import { Box, Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)({
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "2",
  whiteSpace: "pre-wrap",
  textAlign: "center",
  margin: "0 0 10px 0",
});

export const Rank = styled(Box)({
  position: "absolute",
  top: "0",
  right: "0",
  borderRadius: "0 7px 0 0",
  background: "pink",
  padding: "7px",
});

export const Text = styled(Typography)({
  my: "10px",
});

export const BoldText = styled("span")({
  fontWeight: "bold",
});

export const CardBox = styled(Card)({
  borderRadius: "10px",
  left: "-25%",
  height: "300px",
  zIndex: 99,
});

export const ContentCard = styled(CardContent)({
  padding: "2px 7px",
});
