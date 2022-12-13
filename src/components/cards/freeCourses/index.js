import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../utils/constants/theme";

const FreeCoursesCard = ({
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
      key={id}
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: SIZES.spacing,
        }}
      >
        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.fontBase,
              lineHeight: 22,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.fontSmall,
              color: COLORS.grey,
              lineHeight: 17,
            }}
          >
            {company}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.fontSmall,
              color: COLORS.grey,
              lineHeight: 17,
            }}
          >
            {certificate}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="star" size={16} color="black" />
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.fontSmall,
                color: COLORS.grey,
                lineHeight: 17,
                marginHorizontal: 4,
              }}
            >
              {ratingScore}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.fontSmall,
                color: COLORS.grey,
                lineHeight: 17,
              }}
            >
              ({ratings})
            </Text>
          </View>
        </View>
        <Image
          source={{
            uri: background,
          }}
          resizeMode="cover"
          style={{
            width: 60,
            height: 60,
            borderRadius: 4,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FreeCoursesCard;
