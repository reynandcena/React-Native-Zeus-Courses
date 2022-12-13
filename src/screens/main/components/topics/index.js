import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import sanityClient from "../../../../../sanity";
import TopicCard from "../../../../components/cards/topics";

const Topic = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "topics"] | order(_createdAt asc)
        `
      )
      .then((data) => {
        setTopics(data);
      });
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {topics.map((topic) => (
        <TopicCard
          key={topic._id}
          id={topic._id}
          title={topic.topicName}
          color={topic.color}
        />
      ))}
    </ScrollView>
  );
};

export default Topic;
