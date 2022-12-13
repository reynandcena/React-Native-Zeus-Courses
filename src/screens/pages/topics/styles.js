import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.card,
    padding: SIZES.spacing,
  },

  modalLinkText: {
    fontFamily: FONTS.medium,
    color: COLORS.themeColor,
    lineHeight: 22,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading5,
  },

  subHeader: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading4,
    width: 200,
  },

  linkText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontSmall,
  },
});
