const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://tito:warriors45@clusterbegining.f4rrw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

module.exports = connection;
