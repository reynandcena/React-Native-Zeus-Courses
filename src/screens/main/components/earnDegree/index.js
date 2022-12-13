import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient, { urlFor } from "../../../../../sanity";
import DegreeCard from "../../../../components/cards/degree";

const EarnDegree = () => {
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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {degrees
        .map((degree) => (
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
        .slice(0, 6)}
    </ScrollView>
  );
};

export default EarnDegree;
