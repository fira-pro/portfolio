import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
export default function App() {
  const { mode, setMode } = useColorScheme();
  return (
    <div>
      <h1>Current theme: {mode}</h1>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            setMode(mode === "dark" ? "light" : "dark")
          }
        >
          Toggle theme
        </Button>
        <Button variant="contained" color="secondary">
          Secondary btn
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Typography color="primary" variant="h3">
          This is primary text
        </Typography>
        <Typography color="secondary" variant="h3">
          This is secondary text
        </Typography>
        <Typography color="textPrimary" variant="h3">
          This is textPrimary text
        </Typography>
        <Typography color="textSecondary" variant="h3">
          This is textSecondary text
        </Typography>
      </div>
      <div>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button
          variant="contained"
          // sx={[
          //   (theme) =>
          //     theme.applyStyles("light", {
          //       bgcolor: theme.palette.error.light,
          //       color: theme.palette.primary.light,
          //     }),
          //   (theme) =>
          //     theme.applyStyles("dark", {
          //       backgroundColor: theme.palette.error.light,
          //       color: () => {
          //         console.log(theme.palette.primary);
          //         return theme.palette.primary.main;
          //       },
          //     }),
          // ]}
          sx={{
            bgcolor: red[100],
            color: red[800],
          }}
        >
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </div>
      <div>
        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
          }}
        >
          This inside a Box
        </Box>
      </div>

      <Typography
        sx={{
          fontFamily: `'Geist', 'Manrope', 'sans-serif'`,
        }}
      >
        Geist Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita, aliquid. Consectetur
        similique quas natus maxime neque eligendi quod
        deleniti accusantium maiores, officiis asperiores
        libero beatae voluptatum iusto eum, modi mollitia.
      </Typography>
      <Typography
        sx={{
          fontFamily: `'Manrope', 'Geist', 'sans-serif'`,
        }}
      >
        Manrope Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Distinctio quia fugiat quas
        officia sunt, earum error reprehenderit nesciunt
        assumenda delectus similique quam nam in! Nesciunt
        pariatur architecto libero non nobis?
      </Typography>
    </div>
  );
}
