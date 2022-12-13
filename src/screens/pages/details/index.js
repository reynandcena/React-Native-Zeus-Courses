import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { styles } from "./styles";
import { SIZES } from "../../../utils/constants";

const CourseDetails = ({ navigation }) => {
  const {
    params: {
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
    },
  } = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
            <Text style={styles.modalLinkText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              display: ratingScore === "" ? "flex" : "none",
            }}
          >
            <MaterialIcons name="star" size={20} color="#202528" />
            <Text style={styles.rating}>{ratingScore}</Text>
            <Text style={styles.rating}>({ratings})</Text>
          </View>
          <Text style={[styles.rating, { marginTop: 30 }]}>Offered by</Text>
          <View
            style={{
              width: 200,
            }}
          >
            <Image
              source={{
                uri: logo,
              }}
              resizeMode="contain"
              style={{
                width: 200,
                height: 60,
                marginTop: SIZES.base,
              }}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.header}>About the Course</Text>
          <Text style={styles.defaultText}>{description}</Text>

          {pace && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="md-globe-outline" size={24} color="black" />
              </View>
              <View style={{ marginLeft: SIZES.spacing }}>
                <Text
                  style={[
                    styles.defaultText,
                    { fontWeight: "bold", fontSize: SIZES.fontLarge },
                  ]}
                >
                  {pace}
                </Text>
              </View>
            </View>
          )}

          {duration && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: SIZES.spacing }}>
                <Text
                  style={[
                    styles.defaultText,
                    { fontWeight: "bold", fontSize: SIZES.fontLarge },
                  ]}
                >
                  {duration}
                </Text>
              </View>
            </View>
          )}

          {level && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="stacked-bar-chart"
                  size={24}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: SIZES.spacing }}>
                <Text
                  style={[
                    styles.defaultText,
                    { fontWeight: "bold", fontSize: SIZES.fontLarge },
                  ]}
                >
                  {level}
                </Text>
              </View>
            </View>
          )}

          {subtitle && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="chat-processing-outline"
                  size={24}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: SIZES.spacing }}>
                <Text
                  style={[
                    styles.defaultText,
                    { fontWeight: "bold", fontSize: SIZES.fontLarge },
                  ]}
                >
                  {subtitle}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.filledButton}
        onPress={() =>
          navigation.navigate("EnrollmentScreen", {
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
        <Text style={styles.filledButtonText}>See enrollment options</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CourseDetails;
