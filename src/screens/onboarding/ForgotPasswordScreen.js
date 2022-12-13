import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../components/FocusedStatusBar";
import { styles } from "./styles";

const ForgotPasswordScreen = ({ navigation }) => {
  const [user, setUser] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 24 }}>
          <Text style={styles.logo}>Zeus Courses</Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.paragraph}>
            Enter your email to reset your password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email (Required)"
            value={user}
            onChangeText={(text) => setUser(text)}
          />
        </View>
        <TouchableOpacity
          style={
            user === "" ? styles.filledButtonInActive : styles.filledButton
          }
          disabled={user === "" ? true : false}
          onPress={() => navigation.navigate("CheckEmailScreen")}
        >
          <Text style={styles.filledButtonText}>Send Email</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
