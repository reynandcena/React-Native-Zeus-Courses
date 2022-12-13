import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import FocusedStatusBar from "../../components/FocusedStatusBar";
import { ASSETS } from "../../utils/constants";
import { styles } from "./styles";

const LearnScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 600,
          }}
        >
          <Image
            source={ASSETS.Book}
            resizeMode="contain"
            style={{ width: "100%", height: 150 }}
          />
          <Text style={styles.title}>
            You haven't enrolled in any courses (yet)
          </Text>
          <Text style={styles.paragraph}>
            Start by enrolling in a course and learn something new.
          </Text>
          <TouchableOpacity
            style={[styles.filledButton, { marginTop: 20 }]}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.filledButtonText}>Explore courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnScreen;
