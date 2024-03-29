// express
const express = require("express");
const app = express();
// routes
const routes = require("./routes");

require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// MongoDB
const mongoose = require("mongoose");
// const { config } = require("dotenv/types");
// Connect to the MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,
useFindAndModify: false });

// port
const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
