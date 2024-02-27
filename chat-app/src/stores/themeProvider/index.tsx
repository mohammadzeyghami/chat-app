import { create } from "zustand";
type ThemeType = {
  theme: string;
  Themehandler: () => void;
  setTheme: (theme: string) => void;
};

export const useTheme = create<ThemeType>((set) => ({
  theme: "light",
  Themehandler: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (state) => set(() => ({ theme: state })),
}));
