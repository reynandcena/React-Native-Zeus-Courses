import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient, { urlFor } from "../../../../sanity";
import { styles } from "./styles";
import FreeCoursesCard from "../../cards/freeCourses";

const DegreeModal = ({ visibleModal, openModal }) => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('c798efa9-ca5a-4902-9561-bbb752e06c6c')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setDegrees(data);
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
          <Text style={styles.title}>Earn Your Degree</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {degrees.map((degree) => (
            <FreeCoursesCard
              key={degree._id}
              id={degree._id}
              title={degree.courseName}
              topic={degree.topicName?.topicName}
              category={degree.categoryName?.categoryName}
              background={urlFor(degree.background).url()}
              logo={urlFor(degree.logo).url()}
              company={degree.offeredBy}
              description={degree.description}
              instructor={degree.instructor}
              certificate={degree.accreditation}
              trial={degree.trial}
              aid={degree.aid}
              duration={degree.duration}
              subtitle={degree.subtitle}
              level={degree.level}
              pace={degree.pace}
              minimumCredit={degree.minimumCredit}
              creditDegree={degree.creditDegree}
              creditHour={degree.creditHour}
              registrationDate={degree.registrationDate}
              deadline={degree.deadline}
              classesBegin={degree.classesBegin}
              ratingScore={degree.ratingScore}
              ratings={degree.ratings}
              enrolled={degree.enrolled}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DegreeModal;
