import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";

import FocusedStatusBar from "../../components/FocusedStatusBar";
import { useTogglePasswordVisibility } from "../../utils/hooks/useTogglePasswordVisibility";
import { styles } from "./styles";
import { COLORS } from "../../utils/constants";

const RegisterScreen = ({ navigation }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [password, setPassword] = useState("");

  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("SplashScreen");
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <Spinner visible={loading} overlayColor={COLORS.bgOverlay} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 24 }}>
          <Text style={styles.logo}>Zeus Courses</Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.paragraph}>Create an account</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name (Required)"
            value={user}
            onChangeText={(text) => setUser(text)}
          />
          <TextInput style={styles.input} placeholder="Email (Required)" />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password (Required)"
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              value={password}
              enablesReturnKeyAutomatically
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#727273"
              />
            </Pressable>
          </View>
          <TouchableOpacity
            style={
              user === "" ? styles.filledButtonInActive : styles.filledButton
            }
            disabled={user === "" ? true : false}
            onPress={startLoading}
          >
            <Text style={styles.filledButtonText}>Create an Account</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.hr50} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.hr50} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
            <Text style={[styles.buttonTextBold, { alignSelf: "center" }]}>
              Sign up with your organization
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
