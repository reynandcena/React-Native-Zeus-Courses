export default {
  name: "certificates",
  title: "Certificates",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Certificate Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "offeredBy",
      title: "Company",
      type: "string",
    },
    {
      name: "background",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "topic",
      title: "Topics",
      type: "string",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "certificate",
      title: "Certificate",
      type: "string",
    },
    {
      name: "instructor",
      title: "Instructor",
      type: "string",
    },
    {
      name: "trial",
      title: "Trial",
      type: "string",
    },
    {
      name: "financialAid",
      title: "Financial Aid",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "enrollmentDate",
      title: "Enrollment Date",
      type: "string",
    },
    {
      name: "ratingScore",
      title: "Rating Score",
      type: "string",
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "string",
    },
    {
      name: "enrolled",
      title: "Enrolled",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "mainSubtitle",
      title: "Main Subtitle",
      type: "string",
    },
    {
      name: "subtitles",
      title: "Subtitles",
      type: "array",
      of: [
        {
          name: "subtitle",
          title: "Subtitles",
          type: "string",
        },
      ],
    },
    {
      name: "level",
      title: "Level",
      type: "string",
    },
    {
      name: "pace",
      title: "Pace",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
