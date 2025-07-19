import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function IntroHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" textAlign="center">
        Hi👋🏽 I'm Firaol
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        textAlign="center"
      >
        A software developer
      </Typography>
    </Box>
  );
}
