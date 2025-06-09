import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import AppLayout from "./components/AppLayout";
export default function App() {
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return <AppLayout />;
}
