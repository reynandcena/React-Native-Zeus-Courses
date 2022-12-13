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

const SplashScreen = ({ navigation }) => {
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
            source={ASSETS.Headphone}
            resizeMode="contain"
            style={{ width: "100%", height: 150 }}
          />
          <Text style={styles.title}>Learn on the go with Audio Only mode</Text>
          <Text style={styles.paragraph}>
            You can now learn anywhere, anytime and listen to the audio in
            select videos.
          </Text>
          <TouchableOpacity
            style={[styles.filledButton, { marginTop: 20 }]}
            onPress={() => navigation.navigate("LearnScreen")}
          >
            <Text style={styles.filledButtonText}>Got it</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
