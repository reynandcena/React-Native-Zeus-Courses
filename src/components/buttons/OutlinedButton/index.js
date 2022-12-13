import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const OutlinedButton = ({ logo, title, onPressLink }) => {
  return (
    <TouchableOpacity style={styles.outlineButton} onPress={onPressLink}>
      <Image source={logo} style={styles.logoButton} resizeMode="contain" />
      <Text
        style={
          title === "Continue with Facebook"
            ? styles.outlineButtonTextFacebook
            : styles.outlineButtonText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
