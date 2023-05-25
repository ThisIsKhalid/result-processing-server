import express from "express";
import { getCourses, postCourse } from "./course.controller.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/add-course", postCourse);

export default router;
