import { variants } from "./types";

export const styleVariants = {
  [variants.ROUND]: {
    borderRadius: "16px",
  },
  [variants.FLAT]: {
    borderRadius: 0,
  },
};

export default styleVariants;
