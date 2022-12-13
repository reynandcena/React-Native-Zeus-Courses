import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FocusedStatusBar from "../../components/FocusedStatusBar";
import { styles } from "./styles";
import { ASSETS } from "../../utils/constants";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <Ionicons
            name="settings-outline"
            size={18}
            color="#2354cc"
            style={{ alignSelf: "flex-end" }}
          />
        </TouchableOpacity>

        <Text style={styles.titleHeader}>Profile</Text>

        <View style={{ marginTop: 16 }}>
          <Text style={styles.userName}>Reynan Decena</Text>
          <Text style={styles.userEmail}>rdecena@gmail.com</Text>
        </View>
        <Image
          source={ASSETS.Certificate}
          resizeMode="contain"
          style={{ width: "100%", height: 150, marginVertical: 32 }}
        />
        <Text style={styles.title}>
          That feeling of completion is just around the corner
        </Text>
        <Text style={styles.paragraph}>
          Make some progress to get closer to your goal.
        </Text>
        <TouchableOpacity
          style={[styles.filledButton, { marginTop: 20 }]}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.filledButtonText}>Continue Learning</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
