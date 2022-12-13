import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient, { urlFor } from "../../../../sanity";
import FreeCoursesCard from "../../cards/freeCourses";
import { styles } from "./styles";

const FreeCoursesModal = ({ visibleModal, openModal }) => {
  const [free, setFree] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('6dbf59b6-8303-4f90-ba80-b5772deedb48')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setFree(data);
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
          <Text style={styles.title}>Get Started with These Free Courses</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {free.map((courses) => (
            <FreeCoursesCard
              key={courses._id}
              id={courses._id}
              title={courses.courseName}
              topic={courses.topicName?.topicName}
              category={courses.categoryName?.categoryName}
              background={urlFor(courses.background).url()}
              logo={urlFor(courses.logo).url()}
              company={courses.offeredBy}
              description={courses.description}
              instructor={courses.instructor}
              certificate={courses.accreditation}
              trial={courses.trial}
              aid={courses.aid}
              duration={courses.duration}
              subtitle={courses.subtitle}
              level={courses.level}
              pace={courses.pace}
              minimumCredit={courses.minimumCredit}
              creditDegree={courses.creditDegree}
              creditHour={courses.creditHour}
              registrationDate={courses.registrationDate}
              deadline={courses.deadline}
              classesBegin={courses.classesBegin}
              ratingScore={courses.ratingScore}
              ratings={courses.ratings}
              enrolled={courses.enrolled}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default FreeCoursesModal;
