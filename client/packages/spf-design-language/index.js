import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";
import { breakpoints, mediaQueries } from "./breakpoints";

const spfDesingLanguage = {
  colors,
  fontSizes,
  fontWeights,
  breakpoints,
  mediaQueries,
  margins: [0, 2, 5, 8, 10, 15, 20, 25, 30, 40, 50],
  radii: {
    2: 2,
    5: 5,
    medium: 20,
    complete: "100%",
  },
  dimensions: {
    navBar: {
      w: "230px",
    },
    topBar: {
      h: "60px",
    },
    main: {},
    nowPlaying: {
      h: "80px",
    },
  },
  borders: {
    primary : `2px solid ${colors.primary}`,
    lightAlpha : [
      `2px solid ${colors.text.primary}`
    ]
  },
};
export default spfDesingLanguage;
