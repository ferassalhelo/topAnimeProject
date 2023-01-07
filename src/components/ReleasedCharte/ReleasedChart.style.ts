// Style properties can be written into sx{} , but I prefer this method to separate the style as much as possible...
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TooltipBox = styled(Box)({
  borderRadius: "8px",
  border: "2px solid red",
  textAlign: "center",
  padding: "25px",
  backgroundColor: "#fff",
});
