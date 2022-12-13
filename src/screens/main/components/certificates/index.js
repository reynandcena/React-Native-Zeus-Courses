import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient, { urlFor } from "../../../../../sanity";
import CertificateCard from "../../../../components/cards/certificates";

const Certificates = () => {
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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {certificates
        .map((certificate) => (
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
        .slice(0, 6)}
    </ScrollView>
  );
};

export default Certificates;
