export default {
  name: "free",
  title: "Free Courses",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "offeredBy",
      title: "Offered By",
      type: "string",
    },
    {
      name: "topic",
      title: "Topics",
      type: "string",
    },
    {
      name: "instructor",
      title: "Instructor",
      type: "string",
    },
    {
      name: "financialAid",
      title: "Financial Aid",
      type: "string",
    },
    {
      name: "background",
      title: "Background Image",
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
      name: "description",
      title: "Description",
      type: "text",
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
  ],
};
