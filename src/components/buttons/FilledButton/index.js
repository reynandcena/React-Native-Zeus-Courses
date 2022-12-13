import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const FilledButton = ({ title, onClick }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.filledButton}
      onPress={() => navigation.navigate(onClick)}
    >
      <Text style={styles.filledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;
