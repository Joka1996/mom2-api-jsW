import express from "express";
// const bodyParser = require("body-parser");
import coursesRoutes from "./routes/courses.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/courses", coursesRoutes);

app.listen(PORT, () => {
  console.log(`server runnint on port: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello from homepage");
});
