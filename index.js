const express = require("express");
const app = express();
const connection = require("./config/db");

connection.once("open", () => console.log("DB connected"));
connection.on("error", () => console.log("Error"));

app.use(
  express.json({
    extended: false,
  })
);
app.use("/", require("./routes/redirect"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started, listening to PORT ${PORT}`);
});
