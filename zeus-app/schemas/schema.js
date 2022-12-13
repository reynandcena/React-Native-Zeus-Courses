import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import topics from "./topics";
import category from "./category";
import courses from "./courses";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([topics, category, courses]),
});
