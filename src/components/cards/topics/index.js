import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../utils/constants";
import { useNavigation } from "@react-navigation/native";

const TopicCard = ({ id, title, color }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TopicsScreen", { id, title })}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          paddingHorizontal: SIZES.base,
          backgroundColor: color,
          marginRight: SIZES.base,
        }}
        key={id}
      >
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.card,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;
