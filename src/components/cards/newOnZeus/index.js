import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../utils/constants/theme";

const NewOnZeusCard = ({
  id,
  title,
  topic,
  category,
  background,
  logo,
  company,
  description,
  instructor,
  certificate,
  trial,
  aid,
  duration,
  subtitle,
  level,
  pace,
  minimumCredit,
  creditDegree,
  creditHour,
  registrationDate,
  deadline,
  classesBegin,
  ratingScore,
  ratings,
  enrolled,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourseDetails", {
          id,
          title,
          topic,
          category,
          background,
          logo,
          company,
          description,
          instructor,
          certificate,
          trial,
          aid,
          duration,
          subtitle,
          level,
          pace,
          minimumCredit,
          creditDegree,
          creditHour,
          registrationDate,
          deadline,
          classesBegin,
          ratingScore,
          ratings,
          enrolled,
        })
      }
    >
      <View
        style={{
          marginRight: 16,
          width: 200,
          backgroundColor: COLORS.hover,
          borderRadius: 4,
        }}
        key={id}
      >
        <Image
          source={{
            uri: background,
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 100,
            borderRadius: 4,
          }}
        />
        <View style={{ padding: 4 }}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              lineHeight: 22,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              lineHeight: 20,
              color: COLORS.grey,
              fontSize: SIZES.fontSmall,
            }}
          >
            {company}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              lineHeight: 20,
              color: COLORS.grey,
              fontSize: SIZES.fontSmall,
            }}
          >
            {certificate}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="star" size={18} color="black" />
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.fontSmall,
                lineHeight: 18,
                color: COLORS.grey,
                marginHorizontal: 4,
              }}
            >
              {ratingScore}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.fontSmall,
                lineHeight: 18,
                color: COLORS.grey,
              }}
            >
              ({ratings})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewOnZeusCard;
