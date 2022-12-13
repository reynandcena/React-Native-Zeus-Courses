import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";

export const styles = StyleSheet.create({
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

  logoButton: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },

  filledButtonText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.card,
  },

  outlineButtonTextFacebook: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fontBase,
    lineHeight: 22,
    color: COLORS.themeColor,
  },
});
