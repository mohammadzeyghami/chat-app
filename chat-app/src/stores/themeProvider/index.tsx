import { create } from "zustand";
type ThemeType = {
  theme: string;
  lang: string;
  Themehandler: () => void;
  setTheme: (theme: string) => void;
  setLang: (lang: string) => void;
};

export const useTheme = create<ThemeType>((set) => ({
  theme: "light",
  lang: "fa",
  Themehandler: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (state) => set(() => ({ theme: state })),
  setLang: (state) => set(() => ({ lang: state })),
}));
