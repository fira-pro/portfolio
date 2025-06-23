import { useColorScheme } from "@mui/material/styles";
import AppLayout from "./components/layout/AppLayout";
import AppBarContent from "./components/layout/AppBarContent";
import AppDrawerContent from "./components/layout/AppDrawerContent";
import MainContent from "./components/layout/MainContent";
export default function App() {
  const { mode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <AppLayout>
      <AppLayout.AppBar>
        <AppBarContent />
      </AppLayout.AppBar>

      <AppLayout.AppDrawer>
        <AppDrawerContent />
      </AppLayout.AppDrawer>

      <AppLayout.Main>
        <MainContent />
      </AppLayout.Main>
    </AppLayout>
  );
}
