export default {
  name: "subscription",
  title: "Subscription",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "topic",
      title: "Topics",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "offeredBy",
      title: "Offered By",
      type: "string",
    },
    {
      name: "instructor",
      title: "Instructor",
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
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "background",
      title: "Background",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
