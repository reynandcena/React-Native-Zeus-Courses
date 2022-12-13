import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient, { urlFor } from "../../../../sanity";
import FreeCoursesCard from "../../cards/freeCourses";
import { styles } from "./styles";

const CertificateModals = ({ visibleModal, openModal }) => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('a2303f3b-a977-41ea-b019-36fa4b29ad06')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setCertificates(data);
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
          <Text style={styles.title}>Most Popular Certificates</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {certificates.map((certificate) => (
            <FreeCoursesCard
              key={certificate._id}
              id={certificate._id}
              title={certificate.courseName}
              topic={certificate.topicName?.topicName}
              category={certificate.categoryName?.categoryName}
              background={urlFor(certificate.background).url()}
              logo={urlFor(certificate.logo).url()}
              company={certificate.offeredBy}
              description={certificate.description}
              instructor={certificate.instructor}
              certificate={certificate.accreditation}
              trial={certificate.trial}
              aid={certificate.aid}
              duration={certificate.duration}
              subtitle={certificate.subtitle}
              level={certificate.level}
              pace={certificate.pace}
              minimumCredit={certificate.minimumCredit}
              creditDegree={certificate.creditDegree}
              creditHour={certificate.creditHour}
              registrationDate={certificate.registrationDate}
              deadline={certificate.deadline}
              classesBegin={certificate.classesBegin}
              ratingScore={certificate.ratingScore}
              ratings={certificate.ratings}
              enrolled={certificate.enrolled}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CertificateModals;
