export default {
  name: "degrees",
  title: "Degrees",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Degree Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "topic",
      title: "Topics",
      type: "string",
    },
    {
      name: "offeredBy",
      title: "University",
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
      title: "Small Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bigLogo",
      title: "Big Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "diploma",
      title: "Diploma",
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
      name: "online",
      title: "Online",
      type: "string",
    },
    {
      name: "creditHour",
      title: "Credit Hour",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
  ],
};
