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

  detailsContainer: {
    backgroundColor: COLORS.overlayDivider,
    padding: SIZES.spacing,
  },

  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading3,
    color: COLORS.primary,
  },

  rating: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.fontBase,
    color: COLORS.primary,
    lineHeight: 17,
    marginLeft: 4,
  },

  header: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading4,
    lineHeight: 34,
  },

  defaultText: {
    fontFamily: FONTS.regular,
    lineHeight: 22,
  },

  iconContainer: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.overlayDivider,
    padding: SIZES.base,
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
});
