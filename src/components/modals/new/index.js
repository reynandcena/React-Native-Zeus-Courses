import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient, { urlFor } from "../../../../sanity";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";
import FreeCoursesCard from "../../cards/freeCourses";

const NewModal = ({ visibleModal, openModal }) => {
  const [newCourses, setNewCourses] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('d245da7b-eb97-49bd-b26a-6758121d5dd9')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setNewCourses(data);
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
          <Text style={styles.title}>New on Zeus</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {newCourses.map((newCourse) => (
            <FreeCoursesCard
              key={newCourse._id}
              id={newCourse._id}
              title={newCourse.courseName}
              topic={newCourse.topicName?.topicName}
              category={newCourse.categoryName?.categoryName}
              background={urlFor(newCourse.background).url()}
              logo={urlFor(newCourse.logo).url()}
              company={newCourse.offeredBy}
              description={newCourse.description}
              instructor={newCourse.instructor}
              certificate={newCourse.accreditation}
              trial={newCourse.trial}
              aid={newCourse.aid}
              duration={newCourse.duration}
              subtitle={newCourse.subtitle}
              level={newCourse.level}
              pace={newCourse.pace}
              minimumCredit={newCourse.minimumCredit}
              creditDegree={newCourse.creditDegree}
              creditHour={newCourse.creditHour}
              registrationDate={newCourse.registrationDate}
              deadline={newCourse.deadline}
              classesBegin={newCourse.classesBegin}
              ratingScore={newCourse.ratingScore}
              ratings={newCourse.ratings}
              enrolled={newCourse.enrolled}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default NewModal;
