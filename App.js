import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import ZeusStackNavigation from "./src/utils/navigation/stack";

export default function App() {
  const [loaded] = useFonts({
    NotoSansRegular: require("./assets/fonts/Noto-Sans-KR-Regular.otf"),
    NotoSansMedium: require("./assets/fonts/Noto-Sans-KR-Medium.otf"),
    NotoSansBold: require("./assets/fonts/Noto-Sans-KR-Bold.otf"),
    NotoSansBlack: require("./assets/fonts/Noto-Sans-KR-Black.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <ZeusStackNavigation />
    </NavigationContainer>
  );
}
