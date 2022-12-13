import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient, { urlFor } from "../../../../../sanity";
import NewOnZeusCard from "../../../../components/cards/newOnZeus";

const NewOnZeus = () => {
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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {newCourses
        .map((newCourse) => (
          <NewOnZeusCard
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
        .slice(0, 6)}
    </ScrollView>
  );
};

export default NewOnZeus;
