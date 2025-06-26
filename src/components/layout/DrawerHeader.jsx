// This wrapper, apart from adding padding and alignments also adds
// z-index(i guess through mixins.toolbar, mui doc didn't say much about it

import { styled } from "@mui/material/styles";

// and it work so :) )
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default DrawerHeader;
