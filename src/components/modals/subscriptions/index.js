import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import sanityClient, { urlFor } from "../../../../sanity";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";
import FreeCoursesCard from "../../cards/freeCourses";

const SubscriptionModal = ({ visibleModal, openModal }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('13cf917f-1ad1-46bf-9e77-84d7bf537ba0')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setSubscriptions(data);
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
          <Text style={styles.title}>Zeus Plus Subscription</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {subscriptions.map((subscription) => (
            <FreeCoursesCard
              key={subscription._id}
              id={subscription._id}
              title={subscription.courseName}
              topic={subscription.topicName?.topicName}
              category={subscription.categoryName?.categoryName}
              background={urlFor(subscription.background).url()}
              logo={urlFor(subscription.logo).url()}
              company={subscription.offeredBy}
              description={subscription.description}
              instructor={subscription.instructor}
              certificate={subscription.accreditation}
              trial={subscription.trial}
              aid={subscription.aid}
              duration={subscription.duration}
              subtitle={subscription.subtitle}
              level={subscription.level}
              pace={subscription.pace}
              minimumCredit={subscription.minimumCredit}
              creditDegree={subscription.creditDegree}
              creditHour={subscription.creditHour}
              registrationDate={subscription.registrationDate}
              deadline={subscription.deadline}
              classesBegin={subscription.classesBegin}
              ratingScore={subscription.ratingScore}
              ratings={subscription.ratings}
              enrolled={subscription.enrolled}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SubscriptionModal;
