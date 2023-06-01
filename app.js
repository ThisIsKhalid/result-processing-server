import cors from "cors";
import express from "express";

const app = express();

// routes
import courseRoute from "./src/modules/courses/course.route.js";
import resultRoute from "./src/modules/results/result.route.js";
import studentRoute from "./src/modules/students/student.route.js";
import teacherRoute from "./src/modules/teachers/teachers.route.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/results", resultRoute);
app.use("/v1/students", studentRoute);
app.use("/v1/courses", courseRoute);
app.use("/v1/teachers", teacherRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Result Processing Server site.");
});

export default app;
