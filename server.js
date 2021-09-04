const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true, // development tool that allow us to make queries against our development server
    // intended to be used only in our development environment here
  })
);

app.listen(4000, () => {
  console.log("Listening");
});