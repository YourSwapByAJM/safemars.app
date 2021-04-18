import { Colors } from "./types";

export const baseColors = {
  failure: "#cc0000",
  primary: "#f84445",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  primaryAlpha: "rgba(249, 68, 69, 0.2)"
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#10161c",
  backgroundDisabled: "#585d66",
  backgroundAlt: "#1e262f",
  contrast: "rgba(88, 93, 102, 0.3)",
  dropdown: "#1E1D20",
  invertedContrast: "rgba(13, 18, 22, 0.3)",
  input: "rgba(13, 18, 22, 0.2)",
  inputSecondary: "#151c1d",
  primaryDark: "#0098A1",
  tertiary: "rgba(0, 0, 0, 0)",
  text: "#fff",
  textDisabled: "rgba(255, 255, 255, 0.7)",
  textSubtle: "rgba(255, 255, 255, 0.7)",
  borderColor: "rgba(15, 21, 22, 0.3)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
  },
};
