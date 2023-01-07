// Style properties can be written into sx{} , but I prefer this method to separate the style as much as possible...

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GridContainer = styled(Grid)({
  gap: "20px",
  padding: "50px 0",
  justifyContent: "center",
});

export const GridItem = styled(Grid)({
  width: "200px",
  height: "300px",
  position: "relative",
});
