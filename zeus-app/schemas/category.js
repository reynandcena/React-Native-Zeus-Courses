export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "categoryName",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
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
