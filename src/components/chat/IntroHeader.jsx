import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WavingHandIcon from "../ui/icons/WavingHandIcon";
import { username } from "src/data/constants";
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
      <Typography
        variant="h2"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        Hi
        <Box
          component="span"
          sx={{
            display: "inline-block",
            animation: "wave 1.5s infinite",
            transformOrigin: "70% 70%",
            "@keyframes wave": {
              "0%": { transform: "rotate(0deg)" },
              "15%": { transform: "rotate(14deg)" },
              "30%": { transform: "rotate(-8deg)" },
              "45%": { transform: "rotate(14deg)" },
              "60%": { transform: "rotate(-4deg)" },
              "75%": { transform: "rotate(10deg)" },
              "100%": { transform: "rotate(0deg)" },
            },
          }}
        >
          <WavingHandIcon fontSize="20" />
        </Box>
        I'm {username.firstName}
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
