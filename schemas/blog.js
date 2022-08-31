export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
        name:'description',
        title:'Description',
        type:'text'
    },
   {
    name:'published_date',
    title:'Published_date',
    type:'date'
    },
    {
        name:'categories',
        title:'Categories',
        type:'array',
        of:[{type:'reference',to:{type:'blog_category'}}]
    }
  ],
};
