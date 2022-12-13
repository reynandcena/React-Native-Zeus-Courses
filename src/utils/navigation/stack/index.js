import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import MainScreen from "../../../screens/onboarding/MainScreen";
import LoginScreen from "../../../screens/onboarding/LoginScreen";
import RegisterScreen from "../../../screens/onboarding/RegisterScreen";
import ForgotPasswordScreen from "../../../screens/onboarding/ForgotPasswordScreen";
import CheckEmailScreen from "../../../screens/onboarding/CheckEmailScreen";
import SplashScreen from "../../../screens/onboarding/SplashScreen";
import ZuesTabNavigation from "../bottom";
import TopicsScreen from "../../../screens/pages/topics";
import CourseDetails from "../../../screens/pages/details";
import EnrollmentScreen from "../../../screens/pages/enrollment";
import FilterScreen from "../../../screens/pages/filter";

const ZeusStackNavigation = () => {
  const Zeus = createStackNavigator();
  return (
    <Zeus.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="MainScreen"
    >
      <Zeus.Screen name="MainScreen" component={MainScreen} />
      <Zeus.Screen name="LoginScreen" component={LoginScreen} />
      <Zeus.Screen name="RegisterScreen" component={RegisterScreen} />
      <Zeus.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Zeus.Screen name="CheckEmailScreen" component={CheckEmailScreen} />
      <Zeus.Screen name="SplashScreen" component={SplashScreen} />
      <Zeus.Screen name="TopicsScreen" component={TopicsScreen} />
      <Zeus.Screen name="CourseDetails" component={CourseDetails} />
      <Zeus.Screen name="EnrollmentScreen" component={EnrollmentScreen} />
      <Zeus.Screen name="FilterScreen" component={FilterScreen} />

      <Zeus.Screen name="LearnScreen" component={ZuesTabNavigation} />
    </Zeus.Navigator>
  );
};

export default ZeusStackNavigation;
