export default {
  name: "topics",
  title: "Topics",
  type: "document",
  fields: [
    {
      name: "topicName",
      title: "Topic Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      title: "Background Color",
      type: "string",
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "courses" }],
        },
      ],
    },
  ],
};
