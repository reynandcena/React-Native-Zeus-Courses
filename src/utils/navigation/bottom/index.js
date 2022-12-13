import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import ExploreScreen from "../../../screens/main/ExploreScreen";
import LearnScreen from "../../../screens/main/LearnScreen";
import ProfileScreen from "../../../screens/main/ProfileScreen";
import { FONTS } from "../../constants";

const ZeusTab = createBottomTabNavigator();

const ZuesTabNavigation = () => {
  return (
    <ZeusTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2354cc",
        tabBarInactiveTintColor: "#A2A2A2",
        tabBarLabelStyle: { fontFamily: FONTS.medium, lineHeight: 17 },
      }}
      initialRouteName="Learn"
    >
      <ZeusTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
        name="Explore"
        component={ExploreScreen}
      />

      <ZeusTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={size}
              color={color}
            />
          ),
        }}
        name="Learn"
        component={LearnScreen}
      />

      <ZeusTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </ZeusTab.Navigator>
  );
};

export default ZuesTabNavigation;
