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
          colorPrimary: "#5B96F7",
          colorBgContainerDisabled: "#5B96F7",
          borderRadius: 2,
          // Alias Token
          colorBgContainer: "#5B96F7",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
