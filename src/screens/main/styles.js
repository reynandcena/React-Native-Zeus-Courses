import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.card,
    paddingHorizontal: SIZES.spacing,
    paddingTop: SIZES.spacing,
  },

  titleHeader: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading3,
    color: COLORS.primary,
    lineHeight: 46,
  },

  buttonText: {
    fontFamily: FONTS.medium,
    color: COLORS.themeColor,
  },

  buttonTextBold: {
    fontFamily: FONTS.bold,
    color: COLORS.themeColor,
    marginLeft: 4,
  },

  logo: {
    fontFamily: FONTS.black,
    fontSize: SIZES.heading2,
    textAlign: "center",
    color: COLORS.themeColor,
  },

  paragraph: {
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    fontSize: SIZES.fontBase,
    fontFamily: FONTS.regular,
    lineHeight: 22,
  },

  filledButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: COLORS.themeColor,
    borderRadius: 4,
    width: "90%",
    alignSelf: "center",
    marginVertical: 8,
  },

  filledButtonText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.card,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading3,
    textAlign: "center",
  },

  subHeader: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading4,
  },

  linkText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
  },

  userName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading5,
    lineHeight: 22,
  },

  userEmail: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.heading6,
    lineHeight: 22,
  },
});
