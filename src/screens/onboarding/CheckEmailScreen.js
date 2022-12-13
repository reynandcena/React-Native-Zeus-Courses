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

const CheckEmailScreen = ({ navigation }) => {
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
            source={ASSETS.Email}
            resizeMode="contain"
            style={{ width: "100%", height: 150 }}
          />
          <Text style={styles.title}>Check your inbox</Text>
          <Text style={styles.paragraph}>
            Please check your email and follow the instructions to reset your
            password. If you do not receive an email or if it expired, you can
            resend one.
          </Text>
          <TouchableOpacity style={[styles.filledButton, { marginTop: 20 }]}>
            <Text style={styles.filledButtonText}>Resend Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
            <Text style={[styles.buttonTextBold, { alignSelf: "center" }]}>
              Back to log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckEmailScreen;
