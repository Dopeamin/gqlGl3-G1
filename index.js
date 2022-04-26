import { GraphQLServer,  } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
import { Todo } from "./resolvers/Todo.mjs";
import { User } from "./resolvers/User.mjs"

import { db } from "./data/db.mjs";

const typeDefs = "./schema/schema.graphql";


const resolvers = {
  Query,
  Todo,
  User,
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    db,},
  
});




server.start( () =>
  console.log("Server is running on localhost:4000")
);