import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient from "../../../../sanity";
import { styles } from "./styles";

const TopicsModal = ({ visibleModal, openModal }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "topics"] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setTopics(data);
      });
  }, []);
  return (
    <Modal
      isVisible={visibleModal}
      onBackdropPress={openModal}
      style={{ margin: 0 }}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      animationInTiming={400}
      animationOutTiming={400}
      coverScreen={false}
      backdropColor="transparent"
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={openModal}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
          <Text style={styles.modalLinkText}>Back</Text>
        </TouchableOpacity>

        <View style={{ alignSelf: "center" }}>
          <Text style={styles.title}>Explore by Topic</Text>
        </View>
        <View>
          {topics.map((topic) => (
            <TouchableOpacity key={topic._id}>
              <Text style={styles.topicName}>{topic.topicName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default TopicsModal;
