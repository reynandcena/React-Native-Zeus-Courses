import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient, { urlFor } from "../../../../../sanity";
import FreeCoursesCard from "../../../../components/cards/freeCourses";

const FreeCourses = () => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      {free
        .map((courses) => (
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
        ))
        .slice(0, 6)}
    </ScrollView>
  );
};

export default FreeCourses;
