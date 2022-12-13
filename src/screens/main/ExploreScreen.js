import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import FocusedStatusBar from "../../components/FocusedStatusBar";
import CertificateModals from "../../components/modals/certificates";
import DegreeModal from "../../components/modals/degree";
import FreeCoursesModal from "../../components/modals/freeCourses";
import NewModal from "../../components/modals/new";
import SubscriptionModal from "../../components/modals/subscriptions";
import TopicsModal from "../../components/modals/topics";
import SearchBar from "../../components/search";
import { COLORS } from "../../utils/constants";
import Certificates from "./components/certificates";
import EarnDegree from "./components/earnDegree";
import FreeCourses from "./components/freeCourses";
import NewOnZeus from "./components/newOnZeus";
import Subscription from "./components/subscription";
import Topic from "./components/topics";
import { styles } from "./styles";

const ExploreScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const [clicked, setClicked] = useState(false);

  const [topicModal, setTopicModal] = useState(false);
  const [certificateModal, setCertificateModal] = useState(false);
  const [degreeModal, setDegreeModal] = useState(false);
  const [freeModal, setFreeModal] = useState(false);
  const [subscriptionModal, setSubcriptionModal] = useState(false);
  const [newCoursesModal, setNewCoursesModal] = useState(false);

  const toggleTopicModal = () => {
    setTopicModal(!topicModal);
  };

  const toggleCertificateModal = () => {
    setCertificateModal(!certificateModal);
  };

  const toggleDegreeModal = () => {
    setDegreeModal(!degreeModal);
  };

  const toggleFreeModal = () => {
    setFreeModal(!freeModal);
  };

  const toggleSubcriptionModal = () => {
    setSubcriptionModal(!subscriptionModal);
  };

  const toggleNewModal = () => {
    setNewCoursesModal(!newCoursesModal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />

      <TopicsModal visibleModal={topicModal} openModal={toggleTopicModal} />
      <CertificateModals
        visibleModal={certificateModal}
        openModal={toggleCertificateModal}
      />
      <DegreeModal visibleModal={degreeModal} openModal={toggleDegreeModal} />
      <FreeCoursesModal visibleModal={freeModal} openModal={toggleFreeModal} />
      <SubscriptionModal
        visibleModal={subscriptionModal}
        openModal={toggleSubcriptionModal}
      />
      <NewModal visibleModal={newCoursesModal} openModal={toggleNewModal} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.titleHeader}>Explore</Text>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeader}>Topics</Text>
            <TouchableOpacity onPress={toggleTopicModal}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>

          <Topic />

          <View style={{ marginTop: 8 }}>
            <Text style={[styles.subHeader, { color: COLORS.grey }]}>
              My Courses
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.subHeader, { lineHeight: 17 }]}>
                Most Popular Certificates
              </Text>
              <TouchableOpacity onPress={toggleCertificateModal}>
                <Text style={styles.linkText}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Certificates />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.subHeader, { lineHeight: 17 }]}>
              Earn Your Degree
            </Text>
            <TouchableOpacity onPress={toggleDegreeModal}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>

          <EarnDegree />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Text style={[styles.subHeader, { lineHeight: 17 }]}>
              Free Courses
            </Text>
            <TouchableOpacity onPress={toggleFreeModal}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FreeCourses />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Text style={[styles.subHeader, { lineHeight: 17 }]}>
              Zeus Plus Subscription
            </Text>
            <TouchableOpacity onPress={toggleSubcriptionModal}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>

          <Subscription />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Text style={[styles.subHeader, { lineHeight: 17 }]}>
              New on Zeus
            </Text>
            <TouchableOpacity onPress={toggleNewModal}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>

          <NewOnZeus />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
