import { useColorScheme } from "@mui/material/styles";
import AppLayout from "./components/layout/AppLayout";
import AppBar from "./components/layout/AppBar";
import AppDrawer from "./components/layout/AppDrawer";
import Main from "./components/layout/Main";
export default function App() {
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <AppLayout>
      <AppBar />
      <AppDrawer />
      <Main />
    </AppLayout>
  );
}
