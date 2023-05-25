import cors from "cors";
import express from "express";

const app = express();

// routes
import courseRoute from "./modules/courses/course.route.js";
import resultRoute from "./modules/results/result.route.js";
import studentRoute from "./modules/students/student.route.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/results", resultRoute);
app.use("/v1/students", studentRoute);
app.use("/v1/courses", courseRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
