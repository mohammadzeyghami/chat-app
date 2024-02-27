import React, { useEffect } from "react";
import str from "../../../../localization";
import { useTheme } from "../../../../stores/themeProvider";

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const { setLang } = useTheme();

  useEffect(() => {
    const languages = navigator.languages || [
      navigator.language || navigator.language,
    ];
    const browserLang = languages[0].split("-")[0]; // Extract language code (e.g., 'en' from 'en-US')
    str.setLanguage(browserLang);
    setLang(browserLang);
  }, []);

  return <>{children}</>;
};

export default LangProvider;
