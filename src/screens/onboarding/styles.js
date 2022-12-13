import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../utils/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.card,
    padding: SIZES.spacing,
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

  hr: {
    width: "90%",
    height: 1,
    backgroundColor: COLORS.grey,
    alignSelf: "center",
    marginVertical: 16,
  },

  hr50: {
    width: "40%",
    height: 1,
    backgroundColor: COLORS.grey,
    alignSelf: "center",
    marginVertical: 16,
  },

  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 4,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: COLORS.card,
  },

  passwordInput: {
    width: "90%",
    paddingLeft: 8,
  },

  passwordInputContainer: {
    backgroundColor: COLORS.card,
    width: "90%",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#727273",
    height: 40,
    alignSelf: "center",
    marginVertical: 8,
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

  filledButtonInActive: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: COLORS.disabledText,
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

  dividerText: {
    fontFamily: FONTS.regular,
    fontStyle: "italic",
    marginHorizontal: 8,
    color: COLORS.grey,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.heading2,
    textAlign: "center",
  },
});
