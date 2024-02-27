import { useEffect } from "react";
import { useTheme } from "../../../../stores/themeProvider";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

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
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
