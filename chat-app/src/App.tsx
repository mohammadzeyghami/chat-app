import { useEffect } from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import { useTheme } from "./stores/themeProvider";

function App() {
  const { theme, Themehandler, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00b96b",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <Button className="!bg-[#000] dark:!bg-white" onClick={Themehandler}>
        button
      </Button>
    </ConfigProvider>
  );
}

export default App;
