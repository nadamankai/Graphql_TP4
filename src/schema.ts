import {createSchema} from "graphql-yoga";

const fs = require("fs");
const path = require("path");
export const schema = createSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "./schema.graphql"),
    "utf-8"
),
    resolvers: {
    Query,
        user,
        cv,
        skill
},
});