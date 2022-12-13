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

const EnrollmentScreen = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.title}>Enroll</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: background,
            }}
            resizeMode="cover"
            style={{
              width: 120,
              height: 100,
              marginTop: SIZES.base,
              borderRadius: 4,
            }}
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.defaultText}>{company}</Text>
            <Text
              style={[
                styles.title,
                { width: 230, textAlign: "left", lineHeight: 22 },
              ]}
            >
              {title}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#E4E4E4",
            marginTop: 16,
          }}
        />
        <View style={{ marginTop: 16 }}>
          <Text
            style={[
              styles.title,
              { width: 230, textAlign: "left", lineHeight: 22 },
            ]}
          >
            Enroll
          </Text>
          <Text
            style={[
              styles.defaultText,
              { fontSize: SIZES.fontBase, marginTop: 8 },
            ]}
          >
            This course offers {certificate}.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#E4E4E4",
            marginVertical: 16,
          }}
        />
        <TouchableOpacity
          style={styles.filledButton}
          onPress={() => navigation.navigate("Learn")}
        >
          <Text style={styles.filledButtonText}>Enroll</Text>
        </TouchableOpacity>

        <Text
          style={[styles.defaultText, { textAlign: "center", marginTop: 16 }]}
        >
          We will issue the Course Certificate after you have completed the
          course. We are unable to issue refunds for products purchased on the
          IOS Platform.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.buttonTextBold}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Text style={styles.buttonTextBold}>Refund Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonTextBold}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnrollmentScreen;
