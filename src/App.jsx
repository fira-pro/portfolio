import { useColorScheme } from "@mui/material/styles";
import AppLayout from "./components/layout/AppLayout";
export default function App() {
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return <AppLayout />;
}
