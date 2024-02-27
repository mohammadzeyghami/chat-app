import "./App.css";
import { Button } from "antd";
import str from "./localization";
import ThemeProvider from "./components/molecules/providers/theme";
import LangProvider from "./components/molecules/providers/lang";
function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Button className="!bg-[#000] dark:!bg-white" onClick={() => {}}>
          {str.title}
        </Button>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
