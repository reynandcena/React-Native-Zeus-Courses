export default {
  name: "courses",
  title: "Courses",
  type: "document",
  fields: [
    {
      name: "courseName",
      title: "Course Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "topicName",
      title: "Topic",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "topics" }],
    },
    {
      name: "categoryName",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
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
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "offeredBy",
      title: "Institution",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "instructor",
      title: "Instructor",
      type: "string",
    },
    {
      name: "accreditation",
      title: "Accreditation",
      type: "string",
    },
    {
      name: "trial",
      title: "Trial",
      type: "string",
    },
    {
      name: "aid",
      title: "Aid",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
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
      name: "minimumCredit",
      title: "Minimum Credit",
      type: "string",
    },
    {
      name: "creditDegree",
      title: "Credit Degree",
      type: "string",
    },
    {
      name: "creditHour",
      title: "Credit Hour",
      type: "string",
    },
    {
      name: "registrationDate",
      title: "Registration Date",
      type: "string",
    },
    {
      name: "deadline",
      title: "Application Deadline",
      type: "string",
    },
    {
      name: "classesBegin",
      title: "Classes Begin",
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
  ],
};
