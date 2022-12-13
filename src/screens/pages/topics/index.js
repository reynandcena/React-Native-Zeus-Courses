import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import sanityClient, { urlFor } from "../../../../sanity";
import { styles } from "./styles";
import Topic from "../../main/components/topics";
import DegreeCard from "../../../components/cards/degree";
import CertificateCard from "../../../components/cards/certificates";
import FreeCoursesCard from "../../../components/cards/freeCourses";

const TopicsScreen = ({ navigation }) => {
  const {
    params: { id, title },
  } = useRoute();

  const [certificates, setCertificates] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [newCourses, setNewCourses] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses"  && references('a2303f3b-a977-41ea-b019-36fa4b29ad06') && references($id)] | order(_createdAt asc)
        `,
        { id }
      )
      .then((data) => {
        setCertificates(data);
      });
  }, [id]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses"  && references('c798efa9-ca5a-4902-9561-bbb752e06c6c') && references($id)] | order(_createdAt asc)
        `,
        { id }
      )
      .then((data) => {
        setDegrees(data);
      });
  }, [id]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses"  && references('d245da7b-eb97-49bd-b26a-6758121d5dd9') && references($id)] | order(_createdAt asc)
        `,
        { id }
      )
      .then((data) => {
        setNewCourses(data);
      });
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={16} color="#2354cc" />
            <Text style={styles.modalLinkText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Topic />
        </View>

        <View style={{ marginTop: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeader}>Launch Your Career</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {certificates
              ?.map((certificate) => (
                <CertificateCard
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
              ))
              .slice(0, 4)}
          </ScrollView>
        </View>

        <View style={{ marginTop: 8 }}>
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
            <TouchableOpacity>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {degrees
              ?.map((degree) => (
                <DegreeCard
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
              ))
              .slice(0, 4)}
          </ScrollView>
        </View>

        <View style={{ marginTop: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeader}>New {title} Courses</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {newCourses
              .map((newCourse) => (
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
              ))
              .slice(0, 4)}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopicsScreen;
