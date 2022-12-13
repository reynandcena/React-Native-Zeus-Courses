import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient, { urlFor } from "../../../../../sanity";
import SubscriptionCard from "../../../../components/cards/subscriptions";

const Subscription = () => {
  const [subscriptions, setSubscription] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "courses" && references('13cf917f-1ad1-46bf-9e77-84d7bf537ba0')] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setSubscription(data);
      });
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {subscriptions
        .map((subscription) => (
          <SubscriptionCard
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
        ))
        .slice(0, 6)}
    </ScrollView>
  );
};

export default Subscription;
