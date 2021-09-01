const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const basicAuth = require("express-basic-auth");
dotenv.config();

const app = express();
const graphQLSchema = require("./graphQlCode/graphql/schema/index.cjs");
const graphQLResolvers = require("./graphQlCode/graphql/resolvers/index.cjs");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// app.use(
// 	basicAuth({
// 		users: { admin: "2MuchSecurity!?" },
// 	})
// );

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@arkyn-ir.ey98y.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    // "mongodb+srv://marco:arkyn@test.x7to6.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(8081);
    console.log("APP RUNNINGsssssss");
  })
  .catch((err) => {
    console.log(err);
  });

// fetch("localhost://8080/graphql", {
// 	method: "POST",
// 	headers: {"Content-type" : "application/json"},
// 	body: {JSON.stringify({
// 		query:`query {
// 			reportedContexts {
// 				name
// 			}
// 			query{

// 			}
// 		}`
// 	})}

// })

// DATABASE - BACKEND - GRAPH - FRONTEND
