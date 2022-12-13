import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: "100%",
    margin: 0,
    padding: SIZES.spacing,
    backgroundColor: COLORS.card,
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
});
