import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "text",
  },
  [variants.SECONDARY]: {
    backgroundColor: "invertedContrast",
    border: "1px solid",
    borderColor: "contrast",
    boxShadow: "none",
    color: "text",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "invertedContrast",
    borderColor: "contrast",
    boxShadow: "none",
    color: "text",
  },
  [variants.SUBTLE]: {
    backgroundColor: "primaryAlpha",
    color: "primary",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};
