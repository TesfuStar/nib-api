// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import services from "./services";
import service_category from "./service_category";
import blog from "./blog";
import blog_category from "./blog_category";
import faq from "./faq";
import schemaTypes from "all:part:@sanity/base/schema-type";
import vacancy from "./vacancy";
import chairman_message from "./chairman_message";
import department from "./department";
import about from "./about";
import management from "./management";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    services,
    blog,
    blog_category,
    faq,
    vacancy,
    service_category,
    chairman_message,
    department,
    about,
    management,
  ]),
});
