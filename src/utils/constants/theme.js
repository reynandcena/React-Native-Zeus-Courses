export const COLORS = {
  primary: "#202528",
  grey: "#727273",
  disabledText: "#00000030",
  hover: "#00000003",
  grey800: "#E4E4E4",
  grey900: "#D6D6D6",
  bg: "#f5f5f5",
  card: "#FFFFFF",
  overlayDivider: "#E6E9EC",
  themeColor: "#2354cc",
  systemsError: "#EF5350",
  systemsWarning: "#E4A400",
  bgOverlay: "#00000090",
};

export const DARKCOLORS = {
  primary: "#ffffff",
  grey: "#ffffff54",
  disabledText: "#ffffff30",
  hover: "#ffffff10",
  grey800: "#E4E4E4",
  grey900: "#D6D6D6",
  bg: "#202528",
  card: "#262B2E",
  overlayDivider: "#2F3336",
  themeColor: "#07B999",
  systemsError: "#EF5350",
  bgOverlay: "#00000090",
};

export const SIZES = {
  heading1: 36,
  heading2: 30,
  heading3: 24,
  heading4: 16,
  heading5: 14,
  heading6: 12,
  fontBase: 14,
  fontLarge: 16,
  fontSmall: 12,
  spacing: 16,
  base: 8,
};

export const FONTS = {
  regular: "NotoSansRegular",
  medium: "NotoSansMedium",
  bold: "NotoSansBold",
  black: "NotoSansBlack",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.darkCard,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
