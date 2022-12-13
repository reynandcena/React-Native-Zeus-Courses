import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { ASSETS, COLORS } from "../../utils/constants";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import FilledButton from "../../components/buttons/FilledButton";
import { styles } from "./styles";

const MainScreen = ({ navigation }) => {
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
        <TouchableOpacity>
          <Text style={styles.buttonText}>Sign Up Later</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.logo}>Zeus Courses</Text>
          <Text style={styles.paragraph}>
            Take the world's best courses online from top universities and
            industry partners.
          </Text>
        </View>

        <View style={{ marginTop: 32 }}>
          <OutlinedButton
            logo={ASSETS.AppleLogo}
            title="Continue with Apple"
            onPressLink={startLoading}
          />
          <OutlinedButton
            logo={ASSETS.GoogleLogo}
            title="Continue with Google"
            onPressLink={startLoading}
          />
          <OutlinedButton
            logo={ASSETS.FacebookLogo}
            title="Continue with Facebook"
            onPressLink={startLoading}
          />
        </View>

        <View style={styles.hr} />

        <FilledButton title="Log in with Email" onClick="LoginScreen" />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.buttonText}>New to Zeus?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.buttonTextBold}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 46 }}>
          <Text style={styles.paragraph}>
            By signing up to create an account I accept Zeus's
            <Text style={styles.buttonText}> Terms of Service</Text>,
            <Text style={styles.buttonText}> Privacy Policy</Text>, and
            <Text style={styles.buttonText}> Honor Code</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
