export default {
  name: "vacancy",
  title: "Vacancy",
  type: "document",
  fields: [
    {
      name: "job_title",
      title: "Job_itle",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
        name: "deadline",
        title: "Deadline",
        type: "date",
      },
      {
        name: "salary",
        title: "Salary",
        type: "date",
      },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 60,
      },
    },
  ],
};
