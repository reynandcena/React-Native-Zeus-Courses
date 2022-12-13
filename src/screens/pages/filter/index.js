import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { styles } from "./styles";
import { Card, Switch } from "react-native-paper";
import { COLORS } from "../../../utils/constants";

const FilterScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);

  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

  const [isSwitchOn3, setIsSwitchOn3] = useState(false);
  const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);

  const [isSwitchOn4, setIsSwitchOn4] = useState(false);
  const onToggleSwitch4 = () => setIsSwitchOn4(!isSwitchOn4);

  const [isSwitchOn5, setIsSwitchOn5] = useState(false);
  const onToggleSwitch5 = () => setIsSwitchOn5(!isSwitchOn5);

  const [isSwitchOn6, setIsSwitchOn6] = useState(false);
  const onToggleSwitch6 = () => setIsSwitchOn6(!isSwitchOn6);

  const [isSwitchOn7, setIsSwitchOn7] = useState(false);
  const onToggleSwitch7 = () => setIsSwitchOn7(!isSwitchOn7);

  const [isSwitchOn8, setIsSwitchOn8] = useState(false);
  const onToggleSwitch8 = () => setIsSwitchOn8(!isSwitchOn8);

  const [isSwitchOn9, setIsSwitchOn9] = useState(false);
  const onToggleSwitch9 = () => setIsSwitchOn9(!isSwitchOn9);

  const [isSwitchOn10, setIsSwitchOn10] = useState(false);
  const onToggleSwitch10 = () => setIsSwitchOn10(!isSwitchOn10);

  const [isSwitchOn11, setIsSwitchOn11] = useState(false);
  const onToggleSwitch11 = () => setIsSwitchOn11(!isSwitchOn11);

  const [isSwitchOn12, setIsSwitchOn12] = useState(false);
  const onToggleSwitch12 = () => setIsSwitchOn12(!isSwitchOn12);

  const [isSwitchOn13, setIsSwitchOn13] = useState(false);
  const onToggleSwitch13 = () => setIsSwitchOn13(!isSwitchOn13);

  const [isSwitchOn14, setIsSwitchOn14] = useState(false);
  const onToggleSwitch14 = () => setIsSwitchOn14(!isSwitchOn14);

  const [isSwitchOn15, setIsSwitchOn15] = useState(false);
  const onToggleSwitch15 = () => setIsSwitchOn15(!isSwitchOn15);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
          <Text style={styles.modalLinkText}>Back</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Filter</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.modalLinkText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 16 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Level</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Card style={styles.cardContainer} mode="contained">
            <Card.Content>
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Beginner</Text>
                <Switch
                  value={!isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Intermediate</Text>
                <Switch
                  value={!isSwitchOn1}
                  onValueChange={onToggleSwitch1}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Mixed</Text>
                <Switch
                  value={!isSwitchOn2}
                  onValueChange={onToggleSwitch2}
                  color={COLORS.themeColor}
                />
              </View>
            </Card.Content>
          </Card>
        </View>

        <View style={{ marginTop: 16 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Learning Product</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Card style={styles.cardContainer} mode="contained">
            <Card.Content>
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Courses</Text>
                <Switch
                  value={!isSwitchOn3}
                  onValueChange={onToggleSwitch3}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Guided Projects</Text>
                <Switch
                  value={!isSwitchOn4}
                  onValueChange={onToggleSwitch4}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Specializations</Text>
                <Switch
                  value={!isSwitchOn5}
                  onValueChange={onToggleSwitch5}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>
                  Professional Certificates
                </Text>
                <Switch
                  value={!isSwitchOn6}
                  onValueChange={onToggleSwitch6}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Graduate Certificates</Text>
                <Switch
                  value={!isSwitchOn7}
                  onValueChange={onToggleSwitch7}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>
                  MasterTrack® Certificates
                </Text>
                <Switch
                  value={!isSwitchOn8}
                  onValueChange={onToggleSwitch8}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Degrees</Text>
                <Switch
                  value={!isSwitchOn9}
                  onValueChange={onToggleSwitch9}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>University Certificates</Text>
                <Switch
                  value={!isSwitchOn10}
                  onValueChange={onToggleSwitch10}
                  color={COLORS.themeColor}
                />
              </View>
            </Card.Content>
          </Card>
        </View>

        <View style={{ marginTop: 16 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Language</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Card style={styles.cardContainer} mode="contained">
            <Card.Content>
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>English</Text>
                <Switch
                  value={!isSwitchOn11}
                  onValueChange={onToggleSwitch11}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>French</Text>
                <Switch
                  value={!isSwitchOn12}
                  onValueChange={onToggleSwitch12}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Portugies(Portugal)</Text>
                <Switch
                  value={!isSwitchOn13}
                  onValueChange={onToggleSwitch13}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Russian</Text>
                <Switch
                  value={!isSwitchOn14}
                  onValueChange={onToggleSwitch14}
                  color={COLORS.themeColor}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Spanish</Text>
                <Switch
                  value={!isSwitchOn15}
                  onValueChange={onToggleSwitch15}
                  color={COLORS.themeColor}
                />
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
